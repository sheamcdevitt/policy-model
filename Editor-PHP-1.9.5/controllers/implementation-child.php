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

if ( ! isset($_POST['project']) || ! is_numeric($_POST['project']) ) {
    echo json_encode( [ "data" => [] ] );
}
else {
    Editor::inst( $db, 'implementation' )
        ->field(
                Field::inst( 'implementation.indicator' ),
                Field::inst( 'implementation.action' ),
                Field::inst( 'implementation.measurables' ),
                Field::inst( 'implementation.value' ),
                Field::inst( 'implementation.partners' ),
                Field::inst( 'implementation.moreinfo' ),
                Field::inst( 'implementation.project' )
                ->options( 'projects', 'id', 'projectName' )
                ->validator( 'Validate::dbValues' ),
            Field::inst( 'projects.projectName' )
        )
        ->leftJoin( 'projects', 'projects.id', '=', 'implementation.project' )
        ->where( 'project', $_POST['project'] )
        ->debug( true )
        ->process($_POST)
        ->json();
}
