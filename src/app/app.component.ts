import { Component, OnInit } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FormControl, FormGroup } from '@angular/forms';
import { SnackbarService } from '@windmill/ng-windmill';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

const DATE_FORMAT = 'MM/DD/YYYY';
const MY_FORMATS = {
  parse: {
    dateInput: DATE_FORMAT,
  },
  display: {
    dateInput: DATE_FORMAT,
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const THIRD_VALUE_INDEX = 2;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.toggleFormGroup = new FormGroup({
      toggleFormControl: new FormControl(true),
    });
  }
  title = 'test';

  //autocomplete
  autocompleteModel?: string;
  fruits = ['Apples', 'Pears', 'Oranges', 'Mandarins', 'Bananas', 'Mangoes'];
  hasClearIcon = true;

  // checkbox
  ngModelIndeterminateCheckbox = false;
  labelValue = 'Label';
  isIndeterminate = true;
  idValue = 'id-input-element-checkbox';

  //datepicker
  ngModelDatePicker: Date | null = null;
  displayedValueExample: Date | null = null;

  //dropdownsearch
  dropdownSearch: FormGroup;
  basicSource: string[] = ['3B7A57', '9966CC', '00FFFF', '7C0A02', 'BFFF00'];
  dropdownSource: string[] = ['3B7A57', '9966CC', '00FFFF', '7C0A02', 'BFFF00'];

  //input
  ngModelInput?: string;

  onModelChangeInput(event: string): void {
    this.ngModelInput = event;
  }

  constructor(private readonly snackbarService: SnackbarService) {
    this.dropdownSearch = new FormGroup({
      basicDropdownSearch: new FormControl(),
    });
  }
  onModelChange(event: Date): void {
    this.displayedValueExample = event === null ? null : new Date(event);
  }

  onSearchValueChanged(event: string): void {
    this.basicSource =
      event === null
        ? this.dropdownSource
        : this.dropdownSource.filter((item) =>
            item.toLowerCase().includes(event.trim().toLowerCase())
          );
  }

  inputSpinnerNgModelValue = 0;

  onValueChangeSpinner(event: number): void {
    this.inputSpinnerNgModelValue = event;
  }

  radioNgModel = 'Black';
  colors = ['Black', 'Red', 'Green', 'Purple', 'Yellow', 'Blue', 'Other'];
  selectedColor = 'Black';

  changedGroupColorValue(value: string): void {
    this.selectedColor = value;
  }

  // hasClearIcon = true;
  preselectedValue = 'Dance';
  selectSource: string[] = [
    'Alternative',
    'Blues',
    'Classical',
    'Commercial',
    'Country',
    'Dance',
    'Disney',
    'Electronic',
    'Rap',
    'Karaoke',
  ];

  onModelChangeSelect(event: string): void {
    this.preselectedValue = event;
  }

  updateValue(): void {
    this.preselectedValue = this.selectSource[THIRD_VALUE_INDEX];
  }

  ngModelSelectCharacters?: string;

  slideToggleNgModel = false;
  toggleFormGroup!: FormGroup;

  sliderModel?: number = 0;
  isVertical = false;
  ariaLabelSlider = 'Percent';
  ariaDescriptionSlider = 'You can use arrows to increase/decrease value';

  textareaNgModelValueWithLabel = '';
  textareaNgModelValueWithLabelledby = '';

  timepickerNgModelValue = new Date();
  placeholder = 'Time picker placeholder';
  // hasClearIcon = true;
  isChecked = true;

  onValueChangeTimepicker(event: Date): void {
    this.timepickerNgModelValue = event;
  }

  onToggleGroupChange(event: MatButtonToggleChange): void {
    this.hasClearIcon = event.value;
  }

  getUploadedFiles(event: File[]): void {
    const acceptedFiles: File[] = [];
    const filesNames: string[] = [];

    event.forEach((file) => {
      if (file.type.includes('image')) {
        acceptedFiles.push(file);
      }
    });

    this.hasAlert = acceptedFiles.length > 1;
    if (acceptedFiles.length > 0) {
      this.filesList = Array(acceptedFiles[0]);

      this.filesList.forEach((file) => {
        filesNames.push(file.name);
      });

      this.resultFilesUploaded = filesNames;
    }
  }

  deleteAttachment(index: number): void {
    this.snackBarRef = this.snackbarService.openSnackbar({
      data: {
        message: `${this.filesList[index].name} file has been deleted.`,
        icon: 'cancel-circle_b',
        action: 'Close',
        testId: 'id-snackbar-delete',
      },
      duration: 3000,
      panelClass: 'my-custom-class',
    });

    const filesNames: string[] = [];
    this.filesList.splice(index, 1);
    this.filesList.forEach((file) => {
      filesNames.push(file.name);
    });

    this.resultFilesUploaded = filesNames;
    this.hasAlert = false;
  }

  onCloseAlert(): void {
    this.hasAlert = false;
  }

  filesList: File[] = [];
  resultFilesUploaded: string[] = [];
  snackBarRef!: MatSnackBarRef<unknown>;
  hasAlert = false;
  currentDate = new Date();
}
