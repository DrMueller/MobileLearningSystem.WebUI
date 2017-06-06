import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastService } from 'app/common/core-services/toast';
import { ArrayUtilities } from 'app/common/utilities';

import { SessionEditService } from '../../services';
import { Fact } from '../../../../models';

@Component({
  selector: 'app-session-learning-run',
  templateUrl: './session-learning-run.component.html',
  styleUrls: ['./session-learning-run.component.scss']
})
export class SessionLearningRunComponent implements OnInit {
  public facts: Fact[] = [];
  public currentFact: Fact;

  private get currentFactIndex(): number {
    return this.facts.indexOf(this.currentFact);
  }

  public get currentFactPosition(): number {
    return this.currentFactIndex + 1;
  }

  public get factsAmount(): number {
    return this.facts.length;
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

  public get isPreviousFactButtonEnabled(): boolean {
    return this.currentFactIndex > 0;
  }

  public get isNextFactButtonEnabled(): boolean {
    return this.currentFactIndex < (this.facts.length - 1);
  }

  public previousFactButtonClicked(): void {
    this.moveFact(-1);
  }

  public nextFactButtonClicked(): void {
    this.moveFact(1);
  }

  private moveFact(position: number): void {
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
