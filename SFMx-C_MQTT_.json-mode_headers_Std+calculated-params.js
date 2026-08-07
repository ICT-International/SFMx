// SFMx-C Parser for .json-mode data via MQTT

// Example raw JSON data:
/*
{
  "dt": "2026-08-07T10:40:00Z",
  "sno": "SXC1nnnn",
  "uo": 15.457,
  "ui": 14.926,
  "co": 17.19,
  "ci": 16.6,
  "so": 0.172,
  "si": 0.166,
  "bv": 4.2,
  "bc": 200,
  "bt": 21.2,
  "ep": "present",
  "ev": 20.1,
  "ec": 26.4,
  "mtdo": 20.445,
  "mtuo": 19.233,
  "rtdo": 1.077,
  "rtuo": 0.459,
  "ro": 2.36,
  "mtdi": 20.119,
  "mtui": 19.048,
  "rtdi": 0.989,
  "rtui": 0.434,
  "ri": 2.292,
  "pd": 2.68
}
*/

// Parser, JSON mapping:
{
	"dt": {
    "label": "date_time",
    "description": "Date and Time of sapflow measurement with UTC encoding"
  },
    "sno": {
    "label": "serialnumber",
    "description": "serial number of sapflow meter"
  },
	"uo": {
    "label": "uncorrected-outer",
    "description": "uncorrected Outer heat-pulse velocity HPV (cm/hr)"
  },
	"ui": {
    "label": "uncorrected-inner",
    "description": "uncorrected inner heat-pulse velocity HPV (cm/hr)"
  },
	"bv": {
    "label": "battery-voltage",
    "description": "internal battery voltage (V)"
  },
	"bc": {
    "label": "battery-charge-current",
    "description": "internal battery charge rate (mA)"
  },
	"bt": {
    "label": "internal-battery-temp",
    "description": "internal battery and enclosure temperature (°C)"
  },
	"ev": {
    "label": "external-power-supply-voltage",
    "description": "external power supply voltage (V)"
  },
	"ec": {
    "label": "external-power-supply-current",
    "description": "external power supply current consumption (mA)"
  },
	"mtdo": {
    "label": "max-temp-downstream-outer",
    "description": "maximum temperature downstream outer"
  },
	"mtuo": {
    "label": "max-temp-upstream-outer",
    "description": "maximum temperature upstream outer"
  },
	"rtdo": {
    "label": "rise-temp-downstream-outer",
    "description": "rise temperature downstream outer"
  },
	"rtuo": {
    "label": "rise-temp-upstream-outer",
    "description": "rise temperature upstream outer"
  },
	"ro": {
    "label": "ratio-outer",
    "description": "ratio for outer measurement point"
  },
	"mtdi": {
    "label": "max-temp-downstream-inner",
    "description": "maximum temperature downstream inner"
  },
	"mtui": {
    "label": "max-temp-upstream-inner",
    "description": "maximum temperature upstream inner"
  },
	"rtdi": {
    "label": "rise-temp-downstream-inner",
    "description": "rise temperature upstream inner"
  },
	"rtui": {
    "label": "rise-temp-upstream-inner",
    "description": "rise temperature upstream inner"
  },
	"ri": {
    "label": "ratio-inner",
    "description": "ratio for inner measurement point"
  },
	"pd": {
    "label": "pulse-duration",
    "description": "heater probe pulse duration"
  }
}

// Unused Key and Headers:
/*
co	N/A
ci	N/A
so	N/A
si	N/A
ep	N/A
*/