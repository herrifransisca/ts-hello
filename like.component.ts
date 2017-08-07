// Note: use this code to compile, if not, would show error in terminal -> tsc *.js --target es5 | node main.js

export class LikeComponent {
  constructor(
    private _likesCount: number,
    private _isSelected: boolean) {
  }

  onClick() {
    // (this.isSelected) ? this.likesCount-- : this.likesCount++;
    this._likesCount += (this._isSelected) ? -1 : 1;
    this._isSelected = !this._isSelected;
  }

  get likesCount() {
    return this._likesCount;
  }

  get isSelected() {
    return this._isSelected;
  }
}