import { Injectable } from '@nestjs/common';

@Injectable()
export class ArrayService {
  async getSizeOfMaxiulSubset(number: number, array: string): Promise<number> {

    // Convert string of numbers to array
    const arrayOfnumber = array.split(",");

    if (number == 0 || number == 1) {
      return 1
    }
    const ma = {};
    let final = 0;
    arrayOfnumber.forEach((x: any) => {
      let val = (ma[x % number] ? ma[x % number] + 1 : 1);
      ma[(x % number).toString()] = val;
    });
    
    Object.keys(ma).forEach((x, i) => {
      let oppositeValue = ma[number - Number(x)] || 0;
      if (ma[x] > oppositeValue && Number(x) != 0) {
        final += ma[x];
      } else if (Number(x) == (number - Number(x)) || Number(x) == 0) {
        final += 1;
      }
    });
    return final;
  }
}
