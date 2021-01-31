import cloneDeep from 'lodash.clonedeep';

// -> FURTHEST BACK LOCATION IS AT ARRAY POSITION 0
// -> CLOSEST LOCATION IN HISTORY IS AT ARRAY POSITION N-1

// -> MOVING BACKWARDS IN HISTORY MEANS DECREASING THE CURRENT POSITION BY 1
// -> MOVING FORWARDS IN HISTORY MEANS INCREASING THE CURRENT POSITION BY 1

export class ResourceBrowserHistory {

  private _history: string[];
  private _currentPosition: number;

  constructor(id: string) {
    this._history = [id]; // -> Initialize first entry in the history with id of top level resource directory.
    this._currentPosition = 0;
  }

  get history(): string[] {
    return this._history;
  }

  get currentPosition(): number {
    return this._currentPosition;
  }

  // -> A new directory is chosen, pushing it into the history structure.
  public navigateToDirectory = (id: string) => {
    // - 1. Make a deep copy of the current history structure.
    let historyCopy = cloneDeep(this._history);
    // - 2. If there is a calculated difference between the furthest index (length - 1) and
    //       the history's current position index, then the user has stepped backwards 
    //       to some degree in the history. Slice those elements off this deep copy of the
    //       history.
    const historyDelta = (historyCopy.length - 1) - this._currentPosition;
    if (historyDelta > 0) {
      // -> Remove elements in history beyond current position
      historyCopy = historyCopy.slice(this._currentPosition + 1);
    }
    // - 3. Push the id of the new directory being navigated to onto the history array.
    historyCopy.push(id);
    // - 4. Set the class's history object to the deep copy that you've been manipulating. This is
    //       now the new history structure of the resource browser.
    this._history = historyCopy;
    // - 5. Set current position to largest index in the array, AKA the new most current position.
    this._currentPosition = (this._history.length - 1);
  }

  public navigateBackward = (): string | undefined => {
    console.log('Resource Browser History: navigateBackward()');
    console.log('Resource Browser History Structure: history position before navigation -> ', this._currentPosition);
    console.log('Resource Browser History Structure: history before navigation -> ', this._history);
    // -> Fully backward in history.
    if (this._currentPosition === 0) return undefined;
    this._currentPosition--;
    
    console.log('Resource Browser History Structure: history position after navigation-> ', this._currentPosition);
    console.log('Resource Browser History Structure: history after navigation -> ', this._history);

    // -> Resource browser uses this ID to navigate backward by a directory
    return this._history[this._currentPosition];
  }

  public navigateForward = (): string | undefined => {
    console.log('Resource Browser History: navigateForward()');
    const historyDelta = (this._history.length - 1) - this._currentPosition;
    console.log('Resource Browser History Structure: history position before navigation -> ', this._currentPosition);
    console.log('Resource Browser History Structure: history before navigation -> ', this._history);
    // -> Fully forward in history.
    if (historyDelta === 0) return undefined;
    this._currentPosition++;

    console.log('Resource Browser History Structure: history position after navigation -> ', this._currentPosition);
    console.log('Resource Browser History Structure: history after navigation -> ', this._history);

    // -> Resource browser uses this ID to navigate forward by a directory
    return this._history[this._currentPosition];
  }
}