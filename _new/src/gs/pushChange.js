"use strict";

gs.pushChange = function( objDo, objUndo ) {
	if ( gs.historyInd < gs.history.length ) {
		gs.history.length = gs.historyInd;
	}
	gs.historyInd = gs.history.push( { redo: objDo, undo: objUndo } );
	gs.applyChange( objDo );
};