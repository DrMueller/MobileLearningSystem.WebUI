import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastService } from 'app/common/core-services/toast';
import { ArrayUtilities } from 'app/common/utilities';

import { SessionEditService } from '../../services';
import { Fact } from '../../../../models';

@Component({
  selector: 'app-session-test-run',
  templateUrl: './session-test-run.component.html',
  styleUrls: ['./session-test-run.component.scss']
})
export class SessionTestRunComponent implements OnInit {

  public facts: Fact[] = [];
  public currentFact: Fact;
  public isAnswerVisible = false;

  private get currentFactIndex(): number {
    return this.facts.indexOf(this.currentFact);
  }

  public get currentFactPosition(): number {
    return this.currentFactIndex + 1;
  }

  public get factsAmount(): number {
    return this.facts.length;
  }

  public get isPreviousFactButtonEnabled(): boolean {
    return this.currentFactIndex > 0;
  }

  public get isNextFactButtonEnabled(): boolean {
    return this.currentFactIndex < (this.facts.length - 1);
  }

  constructor(
    private toastService: ToastService,
    private sessionEditService: SessionEditService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscribeRoute();
  }

  public showAnswerClicked(): void {
    this.isAnswerVisible = true;
  }

  public previousFactButtonClicked(): void {
    this.moveFact(-1);
  }

  public nextFactButtonClicked(): void {
    this.moveFact(1);
  }

  private moveFact(position: number): void {
    this.isAnswerVisible = false;
    const newIndex = this.currentFactIndex + position;
    this.currentFact = this.facts[newIndex];
  }

  private subscribeRoute(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.sessionEditService.getFactsBySessionId(id).then(data => {
          const shuffledFacts = ArrayUtilities.shuffleInPlace(data);
          this.facts = shuffledFacts;
          if (this.facts) {
            this.currentFact = this.facts[0];
          }
        });
      }
    });
  }

}
