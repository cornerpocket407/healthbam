(function (angular) {
    "use strict";

    var module = angular.module("healthBam.createProgram");

    /**
     * Controller for the healthBamCreateProgram component.
     * @param authenticationService
     * @param programFormDialogService
     * @param $log
     * @constructor
     */
    function CreateProgramController(
        authenticationService,
        programFormDialogService,
        $log
    ) {

        var createProgram = this;

        /**
         * Opens the program form dialog.
         * @returns promise that resolves when dialog is closed.
         */
        function openProgramForm($event) {
            return programFormDialogService.create($event);
        }

        /**
         * Initializes the controller.
         */
        function activate() {
            createProgram.openProgramForm = openProgramForm;
            createProgram.isAdmin = authenticationService.isAdmin;

            $log.debug("CreateProgram Controller loaded", createProgram);
        }

        /* Run activate when component is loaded. */
        createProgram.$onInit = activate;
    }

    /* Inject dependencies. */
    CreateProgramController.$inject = [
        "authenticationService",
        "programFormDialogService",
        "$log"
    ];

    /* Create healthBamCreateProgram component. */
    module.component(
        "healthBamCreateProgram",
        {
            templateUrl: "create-program.html",
            controller: CreateProgramController,
            controllerAs: "createProgram"
        }
    );

}(window.angular));
