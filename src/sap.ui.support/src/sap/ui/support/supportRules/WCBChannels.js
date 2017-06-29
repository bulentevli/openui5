/*!
 * ${copyright}
 */

sap.ui.define([
],
function () {
	"use strict";

	// sap.ui.support
	// WindowCommunicationBus channels
	return {
		ON_CORE_STATE_CHANGE:       "ON_CORE_STATE_CHANGE",
		ON_SHOW_REPORT_REQUEST:     "ON_SHOW_REPORT_REQUEST",
		ON_DOWNLOAD_REPORT_REQUEST: "ON_DOWNLOAD_REPORT_REQUEST",
		ON_ANALYZE_REQUEST:         "ON_ANALYZE_REQUEST",

		ON_INIT_ANALYSIS_CTRL:      "ON_INIT_ANALYSIS_CTRL",
		ON_PROGRESS_UPDATE:         "ON_PROGRESS_UPDATE",
		ON_ANALYZE_FINISH:          "ON_ANALYZE_FINISH",

		VERIFY_CREATE_RULE:         "VERIFY_CREATE_RULE",
		VERIFY_RULE_CREATE_RESULT:  "VERIFY_RULE_CREATE_RESULT",

		VERIFY_UPDATE_RULE:         "VERIFY_UPDATE_RULE",
		VERIFY_RULE_UPDATE_RESULT:  "VERIFY_RULE_UPDATE_RESULT",

		POST_AVAILABLE_LIBRARIES:    "POST_AVAILABLE_LIBRARIES",
		LOAD_RULESETS:               "LOAD_RULESETS",

		GET_AVAILABLE_COMPONENTS:   "GET_AVAILABLE_COMPONENTS",
		POST_AVAILABLE_COMPONENTS:  "POST_AVAILABLE_COMPONENTS",

		HIGHLIGHT_ELEMENT:          "HIGHLIGHT_ELEMENT",
		OPEN_URL:                   "OPEN_URL",

		TREE_ELEMENT_MOUSE_ENTER:   "TREE_ELEMENT_MOUSE_ENTER",
		TREE_ELEMENT_MOUSE_OUT:     "TREE_ELEMENT_MOUSE_OUT",

		UPDATE_SUPPORT_RULES:       "UPDATE_SUPPORT_RULES",
		EXTERNAL_MODULE_UPLOADED:   "EXTERNAL_MODULE_UPLOADED",

		TOGGLE_FRAME_HIDDEN:        "TOGGLE_FRAME_HIDDEN",
		ENSURE_FRAME_OPENED:        "ENSURE_FRAME_OPENED",
		RESIZE_FRAME:               "RESIZE_FRAME",
		REQUEST_RULES_MODEL:        "REQUEST_RULES_MODEL",
		GET_RULES_MODEL:            "GET_RULES_MODEL",
		REQUEST_ISSUES:             "REQUEST_ISSUES",
		GET_ISSUES:                 "GET_ISSUES"
	};
}, true);
