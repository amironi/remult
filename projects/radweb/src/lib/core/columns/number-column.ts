import { Column } from "../column";
import { DataColumnSettings, ColumnOptions } from "../dataInterfaces1";
import { BoolStorage } from "./storage/bool-storage";

export class NumberColumn extends Column<number>{
    constructor(settingsOrCaption?: NumberColumnOptions) {
      super(settingsOrCaption);
      if (!this.inputType)
        this.inputType = 'number';
      let s = settingsOrCaption as NumberColumnSettings;
      if (s && s.decimalDigits) {
        this.__numOfDecimalDigits = s.decimalDigits;
      }
    }
    __numOfDecimalDigits: number = 0;
    protected __processValue(value: number) {
  
      if (value != undefined && !(typeof value === "number"))
        return +value;
      return value;
  
    }
  }
  export interface NumberColumnSettings extends DataColumnSettings<number> {
    decimalDigits?: number;
  }
  export declare type NumberColumnOptions = NumberColumnSettings | string;
  export class BoolColumn extends Column<boolean>{
    constructor(settingsOrCaption?: ColumnOptions<boolean>) {
      super(settingsOrCaption);
      if (!this.inputType)
        this.inputType = 'checkbox';
    }
    __defaultStorage() {
      return new BoolStorage();
    }
  }