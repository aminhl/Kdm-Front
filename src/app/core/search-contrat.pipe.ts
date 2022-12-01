import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'searchContrat'})
export class SearchContratPipe implements PipeTransform{
  transform(contratList: any, target?: any): any {
    if (!contratList) return null;
    if (!target) return contratList;
    console.log('contratList: ', contratList);
    console.log('target: ', target);
    target = target.toLowerCase();
    return contratList.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(target)
    })
  }

}
