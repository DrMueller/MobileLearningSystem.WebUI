import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RxFormBuilder, FormWithValidation, FormValidationService } from '../../../../common/widgets/rx-forms';

import { Fact } from '../../../../models';
import { FactEditService } from '../../services';

@Component({
  selector: 'app-fact-edit',
  templateUrl: './fact-edit.component.html',
  styleUrls: ['./fact-edit.component.scss']
})
export class FactEditComponent implements OnInit {
  private fact: Fact;
  public form: FormWithValidation;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private factEditService: FactEditService,
    private formBuilder: RxFormBuilder,
    private formValidationService: FormValidationService) {
  }

  ngOnInit() {
    this.subscribeRoute();
    this.buildForm();
  }

  public cancelButtonClicked(): void {
    this.navigateToOverview();
  }

  public saveButtonClicked(): void {
    const fact = this.gatherFact();
    this.factEditService.saveFact(fact).then(f => {
      this.navigateToOverview();
    });
  }

  private gatherFact(): Fact {
    const result = new Fact();
    result.id = this.fact.id;
    result.name = this.form.formGroup.get('factNameControl')!.value;
    result.answer.answerText = this.form.formGroup.get('answerTextControl')!.value;
    result.answer.comment = this.form.formGroup.get('answerCommentControl')!.value;
    result.question.questionText = this.form.formGroup.get('questionTextControl')!.value;
    result.question.title = this.form.formGroup.get('questionTitleControl')!.value;

    return result;
  }

  private navigateToOverview(): void {
    this.router.navigate(['/facts']);
  }

  private setFormControlDataIfReady(): void {
    if (this.fact && this.form) {
      this.form.formGroup.patchValue({
        factNameControl: this.fact.name,
        questionTitleControl: this.fact.question.title,
        questionTextControl: this.fact.question.questionText,
        answerCommentControl: this.fact.answer.comment,
        answerTextControl: this.fact.answer.answerText
      });
    };
  };

  private buildForm(): void {

    this.form = this.formBuilder.startBuildingFormGroup(this.formValidationService)
      .withControl('factNameControl')
      .buildControl()
      .withControl('questionTitleControl')
      .buildControl()
      .withControl('questionTextControl')
      .buildControl()
      .withControl('answerCommentControl')
      .buildControl()
      .withControl('answerTextControl')
      .buildControl()
      .buildForm();
    this.setFormControlDataIfReady();
  }

  private subscribeRoute(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id && id !== '-1') {
        this.factEditService.getFact(id).then(data => {
          this.fact = data;
          this.setFormControlDataIfReady();
        });
      } else {
        this.fact = this.factEditService.createNewFact();
        this.setFormControlDataIfReady();
      }
    });
  }
}
