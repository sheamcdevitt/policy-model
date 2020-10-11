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
	->field(
		
		Field::inst( 'implementation.indicator' ),
		Field::inst( 'implementation.action' ),
		Field::inst( 'implementation.measurables' ),
		Field::inst( 'implementation.partners' ),
		Field::inst( 'implementation.moreinfo' ),
		Field::inst( 'implementation.project' )
			->options( Options::inst()
				->table( 'projects' )
				->value( 'id' )
				->label( 'projectName' )
			)
			->validator( Validate::dbValues() ),
        Field::inst( 'projects.projectName' )
	)

	->leftJoin( 'projects', 'projects.id', '=', 'implementation.project' )
    ->process($_POST)
    ->json();