import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssUrl'
})
export class CssUrlPipe implements PipeTransform {


  /**
   * transform url in url() css parameter
   * @param  {string} url
   * @returns string
   */
  transform(url:string):string {
    return `url('${url}')`
  }

}
