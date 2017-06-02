import { Component, OnInit, Input, Output, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectItem } from '../../models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})

export class SelectComponent<T> implements OnInit, ControlValueAccessor {
  public _internalSelectedItem: SelectItem | null;
  public selectItems: SelectItem[];
  private _businessItems: T[];

  @Input() public placeholderText = '';
  @Input() public displayTextPropertyName: string;
  @Input() public idPropertyName: string;
  @Output() public itemSelected = new EventEmitter<T>();

  public get shownText(): string {
    if (!this._internalSelectedItem) {
      return this.placeholderText;
    }

    return this._internalSelectedItem.text;
  }

  @Input() public set selectedItem(value: T | null) {
    if (value) {
      this._internalSelectedItem = this.mapToSelectItem(value);
    } else {
      this._internalSelectedItem = null;
    };
  }

  public get selectedItem(): T | null {
    if (this._internalSelectedItem) {
      const businessItem = this.mapFromSelectItem(this._internalSelectedItem);
      return businessItem;
    }

    return null;
  }

  @Input() public set items(value: T[]) {
    this._businessItems = value;
    if (value) {
      this.selectItems = value.map(f => this.mapToSelectItem(f));
    }
  }

  public buttonClicked(selectItem: SelectItem) {
    this._internalSelectedItem = selectItem;
    this.broadcastChange();
  }

  constructor() {
  }

  ngOnInit() {
  }

  private _propagateChange = (_: any) => { };

  private broadcastChange(): void {
    const businessItem = this.selectedItem || undefined;
    this.itemSelected.emit(businessItem);
    this._propagateChange(businessItem);
  }

  writeValue(obj: any): void {
    const selectItemById = this.selectItems.find(f => f.id === obj);
    if (selectItemById) {
      this._internalSelectedItem = selectItemById;
    }
  }

  registerOnChange(fn: any): void {
    this._propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    // Not needed atm
  }

  setDisabledState(isDisabled: boolean): void {
    // Not needed atm
  }

  private mapToSelectItem(item: T): SelectItem {
    const id = item[this.idPropertyName];
    const text = item[this.displayTextPropertyName];
    return new SelectItem(id, text);
  }

  private mapFromSelectItem(selectItem: SelectItem): T {
    const selectedItem = this._businessItems.find(item => {
      const id = item[this.idPropertyName];
      return id === selectItem.id;
    });

    if (!selectedItem) {
      throw Error('mapFromSelectItem critical error');
    }

    return selectedItem;
  }
}
