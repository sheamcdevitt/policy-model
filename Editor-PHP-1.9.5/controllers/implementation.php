<?php

/*
 * Example PHP implementation used for the htmlTable.html example
 */

// DataTables PHP library
include( "../lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Mjoin,
	DataTables\Editor\Options,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate,
	DataTables\Editor\ValidateOptions;

Editor::inst( $db, 'implementation' )
	->fields(
		
		Field::inst( 'indicator' ),
		Field::inst( 'action' ),
		Field::inst( 'measurables' ),
		Field::inst( 'partners' ),
		Field::inst( 'moreinfo' ),
		Field::inst( 'project' )
	)

	->process( $_POST )
	->json();
