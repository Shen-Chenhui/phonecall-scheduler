import types from './types';

export function addSlot() {
 return {
  type: types.addSlot
 };
}

export function removeSlot() {
 return {
  type: types.removeSlot
 };
}
