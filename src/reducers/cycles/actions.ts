/* eslint-disable no-unused-vars */

import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: 'ADD_NEW_CYCLE',
    payload: {
      newCycle,
    },
  }
}

export function markcurrentCycleAsFinishedAction() {
  return {
    type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: 'INTERRUPT_CURRENT_CYCLE',
  }
}
