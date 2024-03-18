import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class KeywordPhraseResolver implements Resolve<string[]> {

    constructor(private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string[] {
        const keywordPhrase = route.paramMap.get('keyword-phrase');

        if (!keywordPhrase) {
            this.router.navigateByUrl('').then();
            return [];
        }

        const keywords = keywordPhrase.split(' ');

        let finalKeywords = keywords.filter(keyword => keyword.length > 2);

        return finalKeywords.filter(keyword => !this.wordsToIgnore.includes(keyword));
    }

    private wordsToIgnore: string[] = [
        "Ja", "Ti", "On", "Ona", "Ono",
        "Mi", "Vi", "Oni", "One", "Ona",
        "Sebe", "Sebi", "Svoj", "Svoje", "Svojim",
        "Svojem", "Svoga", "Svoju", "Svom", "Nas",
        "Nas", "Vas", "Vas", "Njih", "Njihova",
        "Njihovo", "Njihov", "Njihovim", "Njihovim", "Njihovom",
        "Sve", "Svi", "Svega", "Svih", "Svima",
        "Svuda", "Svugdje", "Svuda", "Nitko", "Ništa",
        "Nikoga", "Ničega", "Nikoga", "Ničim", "Ničim",
        "Nitko", "Ništa", "Nitko", "Ništa",
        "sam", "si", "je", "smo", "ste", "su",
        "bijah", "bijaše", "bijaše", "bijasmo", "bijaste", "bijahu",
        "ću biti", "ćeš biti", "će biti", "ćemo biti", "ćete biti", "će biti",
        "bih bio", "bih bila", "bi bio", "bi bila", "bismo bili", "bismo bile", "biste bili/bile", "bi bili",
        "bi bile"
    ];
}
