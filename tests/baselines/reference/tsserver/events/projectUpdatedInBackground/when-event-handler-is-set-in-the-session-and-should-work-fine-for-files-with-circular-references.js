currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/users/username/projects/project/file1.ts]

                    /// <reference path="./file2.ts" />
                    export var t1 = 10;

//// [/users/username/projects/project/tsconfig.json]
{}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/users/username/projects/project/file1.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /users/username/projects/project
Info seq  [hh:mm:ss:mss] For info: /users/username/projects/project/file1.ts :: Config file name: /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/username/projects/project/tsconfig.json 2000 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectLoadingStart",
     "body": {
      "project": "/users/username/projects/project/tsconfig.json",
      "reason": "Creating possible configured project for /users/username/projects/project/file1.ts to open"
     }
    }
Info seq  [hh:mm:ss:mss] Config: /users/username/projects/project/tsconfig.json : {
 "rootNames": [
  "/users/username/projects/project/file1.ts"
 ],
 "options": {
  "configFilePath": "/users/username/projects/project/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project 1 undefined Config: /users/username/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project 1 undefined Config: /users/username/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/username/projects/project/file2.ts 500 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project/node_modules/@types 1 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project/node_modules/@types 1 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/username/projects/project/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/username/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/users/username/projects/project/file1.ts SVC-1-0 "\n                    /// <reference path=\"./file2.ts\" />\n                    export var t1 = 10;"


	file1.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectLoadingFinish",
     "body": {
      "project": "/users/username/projects/project/tsconfig.json"
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectInfo",
     "body": {
      "projectId": "5b0be5fc7f7235edf5a31bffe614b4e0819e55ec5f118558864b1f882e283c0d",
      "fileStats": {
       "js": 0,
       "jsSize": 0,
       "jsx": 0,
       "jsxSize": 0,
       "ts": 1,
       "tsSize": 96,
       "tsx": 0,
       "tsxSize": 0,
       "dts": 0,
       "dtsSize": 0,
       "deferred": 0,
       "deferredSize": 0
      },
      "compilerOptions": {},
      "typeAcquisition": {
       "enable": false,
       "include": false,
       "exclude": false
      },
      "extends": false,
      "files": false,
      "include": false,
      "exclude": false,
      "compileOnSave": false,
      "configFileName": "tsconfig.json",
      "projectType": "configured",
      "languageServiceEnabled": true,
      "version": "FakeVersion"
     }
    }
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::configFileDiag",
     "body": {
      "configFileName": "/users/username/projects/project/tsconfig.json",
      "diagnostics": [
       {
        "text": "File '/a/lib/lib.d.ts' not found.\n  The file is in the program because:\n    Default library for target 'es5'",
        "code": 6053,
        "category": "error"
       },
       {
        "text": "Cannot find global type 'Array'.",
        "code": 2318,
        "category": "error"
       },
       {
        "text": "Cannot find global type 'Boolean'.",
        "code": 2318,
        "category": "error"
       },
       {
        "text": "Cannot find global type 'Function'.",
        "code": 2318,
        "category": "error"
       },
       {
        "text": "Cannot find global type 'IArguments'.",
        "code": 2318,
        "category": "error"
       },
       {
        "text": "Cannot find global type 'Number'.",
        "code": 2318,
        "category": "error"
       },
       {
        "text": "Cannot find global type 'Object'.",
        "code": 2318,
        "category": "error"
       },
       {
        "text": "Cannot find global type 'RegExp'.",
        "code": 2318,
        "category": "error"
       },
       {
        "text": "Cannot find global type 'String'.",
        "code": 2318,
        "category": "error"
       }
      ],
      "triggerFile": "/users/username/projects/project/file1.ts"
     }
    }
Info seq  [hh:mm:ss:mss] Project '/users/username/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/username/projects/project/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/users/username/projects/project/file2.ts: *new*
  {"pollingInterval":500}
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}
/users/username/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}
/users/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/users/username/projects/project/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/users/username/projects/project: *new*
  {}

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /a/lib/lib.d.ts 0:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Scheduled: /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /a/lib/lib.d.ts 0:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /users/username/projects/project/file2.ts 0:: WatchInfo: /users/username/projects/project/file2.ts 500 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /users/username/projects/project/file2.ts 500 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Scheduled: /users/username/projects/project/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /users/username/projects/project/file2.ts 0:: WatchInfo: /users/username/projects/project/file2.ts 500 undefined Project: /users/username/projects/project/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /users/username/projects/project/file2.ts :: WatchInfo: /users/username/projects/project 1 undefined Config: /users/username/projects/project/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Scheduled: /users/username/projects/project/tsconfig.json, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/project/file2.ts :: WatchInfo: /users/username/projects/project 1 undefined Config: /users/username/projects/project/tsconfig.json WatchType: Wild card directory
Before running Timeout callback:: count: 2
5: /users/username/projects/project/tsconfig.json
6: *ensureProjectForOpenFiles*
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/users/username/projects/project/file2.ts]

                    /// <reference path="./file1.ts" />
                    export var t2 = 10;export var t3 = 10;


PolledWatches::
/users/username/projects/project/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/users/username/projects/project/file2.ts:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}

FsWatches::
/users/username/projects/project/tsconfig.json:
  {}

FsWatchesRecursive::
/users/username/projects/project:
  {}

Info seq  [hh:mm:ss:mss] Running: /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/username/projects/project/file2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/username/projects/project/tsconfig.json Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/username/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/users/username/projects/project/file2.ts Text-1 "\n                    /// <reference path=\"./file1.ts\" />\n                    export var t2 = 10;export var t3 = 10;"
	/users/username/projects/project/file1.ts SVC-1-0 "\n                    /// <reference path=\"./file2.ts\" />\n                    export var t1 = 10;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	file2.ts
	  Referenced via './file2.ts' from file 'file1.ts'
	  Matched by default include pattern '**/*'
	file1.ts
	  Matched by default include pattern '**/*'
	  Referenced via './file1.ts' from file 'file2.ts'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/username/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/username/projects/project/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/username/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (3)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/username/projects/project/file1.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/username/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
     "seq": 0,
     "type": "event",
     "event": "CustomHandler::projectsUpdatedInBackground",
     "body": {
      "openFiles": [
       "/users/username/projects/project/file1.ts"
      ]
     }
    }
After running Timeout callback:: count: 0

PolledWatches::
/users/username/projects/project/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/users/username/projects/project/tsconfig.json:
  {}
/users/username/projects/project/file2.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/users/username/projects/project:
  {}
