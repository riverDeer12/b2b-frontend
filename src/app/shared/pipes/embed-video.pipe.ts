import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'embedVideo'
})
export class EmbedVideoPipe implements PipeTransform {

  transform(value: any): any {
    this.embedVideo();
  }

  embedVideo() {
    document.querySelectorAll('oembed').forEach((element) => {
      const iframe = document.createElement('iframe');
      const url = element.getAttribute('url')?.replace('watch?v=', 'embed/');
      iframe.setAttribute('src', url as string);
      iframe.setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      );
      iframe.setAttribute('allowfullscreen', '');
      element.append(iframe);
    });
  }

}
