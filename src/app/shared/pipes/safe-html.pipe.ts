import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})

// shared videos: youtu.be/UxSOKvlAbwI
// yt videos: youtube.com/watch?v=UxSOKvlAbwI
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    value = value.replace(/oembed/g, 'iframe');
    value = value.replace(/url=/g, 'src=');
    value = this.embedVideoByType(value);
    value = value.replace('<iframe', '<iframe allowfullscreen');

    return this.sanitized.bypassSecurityTrustHtml(value);
  }

  embedVideoByType(videoValue: string): string {
    if (videoValue.includes('.be')) {
      videoValue = videoValue.replace(/.be/, 'be.com/embed');
    } else {
      videoValue = videoValue.replace(/watch\?v=/g, 'embed/');
    }
    return videoValue;
  }
}
