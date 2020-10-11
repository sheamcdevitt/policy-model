<?php

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

Editor::inst( $db, 'projects' )
    ->fields(
        Field::inst( 'id' )->set( false ),
        Field::inst( 'projectName' )->validator( 'Validate::notEmpty' )
    )
    ->join(
        Mjoin::inst( 'implementation' )
            ->link( 'projects.id', 'implementation.project' )
            ->fields(
                Field::inst( 'id' )
            )
    )
    ->process( $_POST )
    ->json();
