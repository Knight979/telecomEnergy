//Prefix of the variables:
//  Label of all inputField: label_
// Placeholder of all inputField: placeholder_
//  Title of the Container: title_
//  Text in button: button_
//  Text in detailContainer, description, Map: text_
//  Text in option in dropdown: option_
//  Toast: toast_

const en = {
  Alarms: {
    title_alarm: 'Alarm',
    title_alarm_detail: 'Alarm Detail',

    option_open: 'Open',
    option_close: 'Closed',
    option_mask: 'Mask',
    option_experts_advise: 'Experts advice',

    toast_success_add_comment: 'Comment added successfully',
    toast_success_add_mask_alarm: 'Moved to mask Alarm Successfully',
    toast_success_delete_mask_alarm: 'Moved to all alarms successfully',
    toast_success_update_alarm: 'Alarm status updated successfully',

    text_open_alarm: 'Open Alarm',
    text_closed_alarm: 'Closed Alarm',
    text_mask_alarm: 'Mask Alarm',
    text_alarm: '{{value}} alarm',
    text_fsu_arrived_time: 'FSU Arrived Time',
    text_create_time: 'Create Time',
    text_event_id: 'Event ID',
    text_details: 'Details',
    text_current_value: 'Current Value',
    text_no_of_repeat: 'No. of Repeat',
    text_platform_time: 'Platform Time',
    text_latest_time: 'Last Updated',
    text_acknowledged_by: 'Acknowledged By',
    text_acknowledged_time: 'Acknowledged Time',
    text_resolved_by: 'Resolved By',
    text_resolved_time: 'Resolved Time',
    text_cleared_by: 'Cleared By',
    text_cleared_time: 'Cleared Time',
    text_action_time: 'Action Time',
    text_day: 'Day',
    text_hour: 'Hour',
    text_minute: 'Minute',
    text_no_advice: 'No Advice',

    button_move_to_all_alarms: 'Move to All Alarms',
    button_acknowledge: 'Acknowledge',
    button_clear: 'Clear',
    button_mask: 'Mask',

    label_severity: 'Severity',
    label_site_name: 'Site Name',
    label_event_id: 'Event ID',
    label_alarm_name: 'Alarm Name',
    label_asset_name: 'Asset Name',
    label_time_range: 'Time Range',
    label_acknowledged: 'Acknowledged',
    label_clear: 'Clear',
    label_latest: 'Latest',

    placeholder_severity: 'Severity',
    placeholder_site_name: 'Site Name',
    placeholder_event_id: 'Event ID',
    placeholder_alarm_name: 'Alarm Name',
    placeholder_asset_name: 'Asset Name',
  },
  Authentication: {
    text_error_url_format: 'Server URL must start with http:// or https://',
    text_error_server_not_found: 'Server not found',
    text_error_wrong_verification_code: 'Wrong verification code',
    text_contact_admin: 'Please contact the administrators.',
    text_forgot_password: 'Forgot Password?',
    text_language: 'Language / 語言',
    text_version: 'Version: {{version}}',

    label_username: 'USERNAME',
    label_password: 'PASSWORD',
    label_server_location: 'SERVER LOCATION',
    label_verification_code: 'VERIFICATION CODE',

    button_login: 'Login',
  },

  CCTV: {
    title_cctv: 'CCTV',
    placeholder_choose_site: 'Choose Site',
    text_region: 'Region',
    text_cctv_health: 'CCTV Health',
    text_total: 'Total',
    text_address: 'Address',
    button_alarm_detail: 'Alarm Detail',
  },

  Navigation: {
    tab_overview: 'Overview',
    tab_alarms: 'Alarms',
    tab_GIS_Map: 'GIS Map',
    tab_settings: 'Settings',
  },
  Common: {
    success: 'Success',
    confirm: 'Confirm',
    clear: 'Clear',
    submit: 'Submit',
    cancel: 'Cancel',
    text_list_no_data_title: 'No Related Result',
    text_list_no_data_subtitle: 'Please try other categories or refresh again',
    text_critical: 'Critical',
    text_major: 'Major',
    text_minor: 'Minor',
    text_warning: 'Warning',
    text_sorting: 'Sorting',
    text_filter: 'Filter',
    button_yes: 'Yes',
    button_no: 'No',
    button_all: 'All',
    button_submit: 'Submit',
    button_clear: 'Clear',
    button_view_more: 'View More',
    button_show_less: 'Show Less',
    placeholder_startDate: 'Start Date',
    placeholder_endDate: 'End Date',
    text_comment: 'Comment',
    text_solution: 'Solution',
    text_possible_cause: 'Possible Cause',
    text_event_description: 'Event Description',
    text_description: 'Description',
    text_with_no_Prefix: 'No {{value}}',
    text_with_add_Prefix: 'Add {{value}}',
    text_updating: 'Updating',
    text_not_updating: 'Not Updating',
    text_error_required: 'Required',
    text_confirm_action: 'Are you sure you want to {{value}}?',

    option_daily: 'Daily',
    option_weekly: 'Weekly',
    option_monthly: 'Monthly',
    option_yearly: 'Yearly',
    option_today: 'Today',
    option_week: 'Week',
    option_month: 'Month',
    option_year: 'Year',
    placeholder_start_date: 'Start Date',
    placeholder_end_date: 'End Date',
  },
  Equipment: {
    title_equipment: 'Equipment',
    text_asset_type: 'Asset Type',

    placeholder_site_list: 'Site List',
    placeholder_asset_type: 'Asset Type',
    placeholder_serach: 'Search...',
    option_all: 'All',
    option_updating: 'Updating',
    option_not_updating: 'Not Updating',
  },

  GISMap: {
    title_gis_map: 'GIS Map',
    text_region: 'Regions',
    text_last_update: 'Last Updated',
    text_coordinates: 'Coordinates',
    text_energy_proportion: 'Energy Proportion',

    placeholder_search_site_name: 'Search Site Name',
    placeholder_search_alarm_name: 'Search Alarm Name',

    button_site_summary: 'Site Summary',
    button_alarm_dashboard: 'Alarm Dashboard',

    option_today: 'Today',
    option_last_week: 'Last Week',
    option_last_month: 'Last Month',
  },
  HistoricalData: {
    title_historical_data: 'Historical Data',

    text_yAxis_text: 'Region/ Province/ Site name',
    text_parameter_name: 'Parameter Name',

    label_Operation_time: 'Operation Time',
    label_time_point: 'Time Point',
    label_site_name: 'Site Name',
    label_assets: 'Assets',
    label_parameter: 'Parameter',

    placeholder_time_point: 'Time Point',
    placeholder_site_name: 'Site Name',
    placeholder_assets: 'Assets',
    placeholder_parameter: 'Parameter',

    button_confirm: 'Confirm',
  },
  Log: {
    title_logs: 'Logs',
    title_filter: 'Filter',

    text_operator: 'Operator',
    text_operation_time: 'Operation Time',
    text_source: 'Source',
    text_operation_name: 'Operation Name',
    text_details: 'Details',
    text_status_success: 'Success',
    text_status_fail: 'Fail',
    text_error_no_apps_can_open: 'No app associated with this file type',

    label_event: 'Event',
    label_operator: 'Operator',
    label_operation_time: 'Operation Time',
    label_source: 'Source',
    label_operation_object: 'Operation Object',
    label_operation_name: 'Operation Name',
    label_operation_result: 'Operation Result',

    placeholder_event: 'Choose Event...',
    placeholder_operator: 'Choose Operator...',
    placeholder_source: 'Choose Source...',
    placeholder_operation_object: 'Choose Operation Object...',
    placeholder_operation_name: 'Choose Operation Name...',
    placeholder_operation_result: 'Choose Operation Result...',

    option_operation_log: 'OSS Operation Log',
    option_system_log: 'OSS System Log',
    option_database: 'Database',
    option_abnormal_running: 'Abnormal Running',
    opiton_cannot_complete: 'Cannot Complete',
    option_CCTV: 'CCTV',
    option_detailed_block: 'Detailed Block',
    option_time_zone: 'Time Zone',
    option_navigation_to_admin_console: 'Navigation to Admin Console',
    option_reports: 'Reports',
    option_logs: 'Logs',
    option_alarms: 'Alarms',
    option_work_order: 'Work Order',
    optin_device_management: 'Device Management',
    option_group_Asset_management: 'Group & Asset Management',
    option_access_card_list: 'Access Card List',
    option_alarm_management: 'Alarm Management',
    option_report_subscription: 'Report Subscription',
    option_dido_management: 'DIDO Management',
    option_database_backup_restore: 'Database Backup & Restore',
    option_work_order_management: 'Work Order Management',
    option_remote_control: 'Remote Control',
    option_remote_modification: 'Remote Modification',
    option_revision: 'Revision',
    option_download: 'Download',
    option_add: 'Add',
    option_delete: 'Delete',
    option_success: 'Success',
    option_fail: 'Fail',
  },
  Overview: {
    tab_energy: 'Energy',
    tab_site_communication_loss: 'Site Communication Loss',
    tab_trouble_tickets: 'Trouble Tickets',
    tab_fuel_consumption: 'Fuel Consumption',
    tab_mains_energy: 'Mains Energy',

    text_total_site: 'Total Site',
    text_site_online: 'Site Online',
    text_site_offline: 'Site Offline',
    text_offline_ratio: 'Offline Ratio',
    text_alarm_statistics: 'Alarm Statistics',
    text_functions_and_features: 'Functions and Features',
    button_site_list: 'Site List',
    button_cctv: 'CCTV',
    button_alarm_trouble_ticket: 'Alarm Trouble Ticket',
    button_preventive_maintenance: 'Preventive Maintenance',
    button_log: 'Log',
    buttun_equipment: 'Equipment',
    button_historical_data: 'Historical Data',

    text_energy_generation_legend: 'Generation',
    text_energy_consumption_legend: 'Consumption',
    text_energy_yAxis_label: 'Energy (kWh)',
    text_communication_loss_updating_legend: 'Updating',
    text_communication_loss_not_updating_legend: 'Not Updating',
    text_communication_loss_yAxis_label: 'No. of Sites',
    text_trouble_tickets_open_legend: 'Open',
    text_trouble_tickets_close_legend: 'Close',
    text_trouble_ticket_yAxis_label: 'No. of Tickets',
    text_fuel_consumption_yAxis_label: 'Liters',
    text_mains_energy_yAxis_label: 'kWh',

    option_by_region: 'By Region',
    option_by_province: 'By Province',
  },

  EquipmentDetails: {
    option_charts: 'Charts',
    option_metrics: 'Metrics',
    option_status: 'Status',
    option_remote: 'Remote',
    option_engine: 'Engine',
    option_generator: 'Generator',
    option_main: 'Mains',
    option_log: 'Log',
    option_soh: 'SOH',
    option_battery_ambient_temperature: 'Battery Ambient Temperature',
    option_battery_voltage: 'Battery Voltage',
    option_battery_cell_voltage: 'Battery Cell Voltage',

    label_close_breaker: 'Close Breaker',
    label_mode: 'Mode',
    label_start_generator: 'Start Generator',
    label_output_frequency: 'Output Frequency',
    label_output_voltage: 'Output Voltage',
    label_output_current: 'Output Current',
    label_fuel_vs_generator_on_off: 'Fuel VS Generator ON/OFF',
    label_auto_update: 'Auto Update',
    label_circuit_breaker: 'Circuit Breaker',
    label_number: 'Number',
    label_ordinary_state: 'Ordinary State',
    label_alarm_related_relay: 'Alarm Related Relay',
    label_start_time: 'Start Time',

    toast_success_clear_fault: 'Successfully cleared fault',
    toast_success_clear_alarm: 'Alarms cleared successfully',
    toast_success_update: 'Updated successfully',
    toast_success_unlock: 'Unlocked successfully',
    toast_success_switch_state: 'Successfully switched state',
    toast_success_change_temperature: 'Successfully changed temperature',
    toast_success_reset: 'Reset successfully',
    toast_success_synchronized: 'Synchronized successfully',
    toast_success_open_door: 'Opened successfully',
    toast_success_test: 'Successful Operation',

    text_open: 'Open',
    text_close: 'Close',
    text_stand_by: 'Standby...',
    text_operation_time: 'Operating Time',
    text_action: 'Action',
    text_account: 'Account',
    text_result: 'Result',
    text_abnormal: 'Abnormal',
    text_sub_healthy: 'Sub-Healthy',
    text_healthy: 'Healthy',
    text_type: 'Type',
    text_enter_password: 'Enter the password',
    text_internal_fan: 'Internal Fan',
    text_external_fan: 'External Fan',
    text_indoor_temperature: 'Indoor Temperature',
    text_temperature_difference: 'Temperature Difference',
    text_locker_name: 'Locker name',
    text_unlock_time: 'Unlock Time',
    text_unlock_mode: 'Unlock Mode',
    text_unlock_by: 'Unlock By',
    text_host: 'Host',
    text_slave: 'Slave',
    text_forward: 'Forward',
    text_backward: 'Backward',
    text_pause: 'Pause',
    text_temperature: 'Temperature',
    text_engine_battery_voltage: 'Engine Battery Voltage',
    text_coolant_temperature: 'Coolant Temperature',
    text_oil_pressure: 'Oil Pressure',
    text_l1_l2_voltage: 'L1-L2 Voltage',
    text_l2_l3_voltage: 'L2-L3 Voltage',
    text_l3_l1_voltage: 'L3-L1 Voltage',
    text_change_mode_auto:
      'Are you sure that you want to change the mode to auto?',
    text_change_mode_manual:
      'Are you sure that you want to change the mode to manual?',
    text_change_generator_on:
      'Are you sure that you want to change the generator to on?',
    text_change_generator_off:
      'Are you sure that you want to change the generator to off?',
    text_change_breaker_on:
      'Are you sure that you want to change the breaker to on?',
    text_change_breaker_off:
      'Are you sure that you want to change the breaker to off?',
    text_close_breaker_s1: 'Are you sure that you want to close s1 breaker?',
    text_close_breaker_s2: 'Are you sure that you want to close s2 breaker?',
    text_turn_off_ats: 'Are you sure that you want to turn off?',
    text_clear_fault: 'Are you sure that you want to clear fault?',
    text_turn_on: 'Are you sure that you want to turn on? ',
    text_turn_off: 'Are you sure that you want to turn off ? ',
    text_make_changes: 'Are you sure that you make the following changes? ',
    text_open_door: 'Are you sure that you want to open the door?',
    text_open_lock: 'Are you sure that you want to open the lock?',
    text_auto_update_on:
      'Are you sure that you want to turn auto update to on?',
    text_auto_update_off:
      'Are you sure that you want to turn auto update to off?',
    text_reset: 'Are you sure that you want to reset?',
    text_clear_alarm: 'Are you sure that you want to clear alarm?',
    text_status_updated_time: 'Status Updated Time',
    text_schedule_cleaning_time: 'Schedule Cleaning Time',
    text_total_fuel_consumption: 'Total Fuel Consumption',
    text_site: 'Site',
    text_operation_status: 'Operation Status',
    text_sc501_mode: 'SC501 Mode',
    text_sc501: 'SC501',
    text_running_hours: 'Running Hours',
    text_measurement: 'Measurement',
    text_value: 'Value',
    text_auto: 'Auto',
    text_manual: 'Manual',
    text_stop: 'Stop',
    text_on: 'On',
    text_off: 'Off',
    text_breaker_closed: '{{-value}} Breaker Closed',
    text_breaker_disabled: 'Disable Status N/A',
    text_ats_mode: 'ATS Mode',
    text_breaker_status: 'Breaker Status',
    text_battery_total_capacity: 'Battery Total Capacity',
    text_estimated_time_remaining: 'Estimated Time Remaining',
    text_today: 'Today',
    text_last_week: 'Last Week',
    text_last_month: 'Last Month',
    text_energy_generation: 'Energy Generation',
    text_statistics: 'Statistics',
    text_lock: 'Lock',
    text_normal_open: 'Normal Open',
    text_normal_close: 'Normal Close',

    button_open_door: 'Open the door',
    button_reset: 'Reset',
    button_synchronize: 'Synchronize',
    button_clear_fault: 'Clear Fault',
    button_clear_alarm: 'Clear Alarm',
    button_turn_off: 'Turn Off',
    button_test: 'Test',
  },

  Settings: {
    title_settings: 'Settings',
    title_about: 'About',
    title_language: 'Language',
    title_time_zone: 'Time Zone',
    title_change_password: 'Change Password',
    button_logout: 'Logout',
    text_version: 'Version',
    text_confirm_logout: 'Are you sure to logout?',
    label_current_password: 'Current Password',
    label_new_password: 'New Password',
    label_confirm_password: 'Confirm Password',
    placeholder_current_password: 'Current Password',
    placeholder_new_password: 'New Password',
    placeholder_confirm_password: 'Confirm Password',
    toast_success_change_password: 'Your password has been changed',
    toast_success_change_timezone: 'Time Zone Updated Successfully',

    timezone: {
      '+1400': 'UTC + 14:00 Kiritimati Island',
      '+1300': 'UTC + 13:00 Samoa',
      '+1200': 'UTC + 12:00 Auckland',
      '+11': 'UTC + 11:00 Solomon Is.',
      '+1000': 'UTC + 10:00 Sydney',
      '+0930': 'UTC + 9:30 Adelaide',
      '+0900': 'UTC + 9:00 Tokyo',
      '+0800': 'UTC + 8:00 Beijing',
      '+0700': 'UTC + 7:00 Bangkok',
      '+0630': 'UTC + 6:30 Yangon',
      '+0600': 'UTC + 6:00 Dhaka',
      '+545': 'UTC + 5:45 Kathmandu',
      '+0530': 'UTC + 5:30 New Delhi',
      '+0500': 'UTC + 5 Tashkent',
      '+0430': 'UTC + 4:30 Kabul',
      '+0400': 'UTC + 4 Tbilisi',
      '+0330': 'UTC + 3:30 Tehran',
      '+0300': 'UTC + 3 Moscow',
      '+0200': 'UTC + 2:00 Athens',
      '+0100': 'UTC + 1 Asterdam',
      '+0000': 'UTC + 0:00 London',
      '-0100': 'UTC - 1 Cabo Verde',
      '-0200': 'UTC - 2:00 Coordinated Univeral Time - 2',
      '-0300': 'UTC - 3:00 Brasilia',
      '-0330': 'UTC - 3:30 Newfoundland',
      '-0400': 'UTC - 4:00 Atlantic Time',
      '-0430': 'UTC - 4:30 Caracas',
      '-0500': 'UTC - 5:00 Eastern Time',
      '-0600': 'UTC - 6:00 Central Time',
      '-0700': 'UTC - 7:00 Arizona',
      '-0800': 'UTC - 8:00 Pacific Time',
      '-0900': 'UTC - 9:00 Alaska',
      '-1000': 'UTC - 10:00 Hawaii',
      '-1100': 'UTC - 11:00 Coordinated Univeral Time - 11',
      '-1200': 'UTC - 12:00 International Date Line West',
    },
  },
  PreventiveMaintenance: {
    title_preventive_maintenance: 'Preventive Maintenance',
    title_filter: 'Filter',
    title_add: 'Add',
    title_open_ticket: 'Open Ticket',
    title_closed_ticket: 'Closed Ticket',
    title_work_order_detail: 'Work Order Details',

    toast_success_add_comment: 'Comment added successfully',
    toast_success_create_ticket: 'Create Ticket successfully',
    toast_success_accept_ticket: 'Ticket accepted successfully',
    toast_success_reject_ticket: 'Ticket rejected successfully',
    toast_success_complete_ticket: 'Ticket completed successfully',
    toast_success_cancel_ticket: 'Ticket cancelled successfully',
    toast_success_close_ticket: 'Ticket closed successfully',

    tab_open_tickets: 'Open Tickets',
    tab_closed_tickets: 'Closed Tickets',
    tab_cycle_tickets_configuration: 'Cycle Tickets Configuration',

    text_confirm_add_ticket_description: 'Confirm to add alarm trouble ticket?',
    text_confirm_accept_ticket_description:
      'Confirm to accept alarm trouble ticket?',
    text_confirm_complete_ticket_description:
      'Are you sure you want to complete this ticket?',
    text_confirm_close_ticket_description:
      'Are you sure you want to close this ticket?',

    text_accept: 'Accept',
    text_reject: 'Reject',
    text_complete: 'Complete',
    text_cancel: 'Cancel',
    text_close: 'Close',

    text_ttName: 'TT Name',
    text_ttNo: 'TT No.',
    text_equipment: 'Equipment',
    text_assignedBy: 'Assigned By',
    text_site_name: 'Site Name',
    text_siteId: 'Site ID',
    text_priority: 'Priority',
    text_generated_time: 'Generated Time',
    text_end_time: 'End Time',
    text_region: 'Regions',
    text_cycle: 'Cycle',
    text_response_time: 'Response Time',
    text_plan_date: 'Plan Date',
    text_warning_time: 'Warning Time',
    text_status: 'Status',
    text_transferred: 'Transferred',
    text_dispatch_time: 'Dispatch Time',
    text_duration: 'Duration',
    text_engineer: 'Engineer',
    text_email: 'Email',
    text_phone_number: 'Phone Number',
    text_cc_engineer: 'CC Engineer {{value}}',
    text_extension_time: 'Extension Time',
    text_update_time: 'Update Time',

    label_region: 'Regions',
    label_site: 'Sites',
    label_ttNo: 'TT No.',
    label_ttName: 'TT Name',
    label_name: 'Name',
    label_priority: 'Priority',
    label_transferred: 'Transferred',
    label_status: 'Status',
    label_equipment: 'Equipment',
    label_plan_date: 'Plan Date',
    label_cycle: 'Cycle',
    label_every: 'Every',
    label_day: 'Days',
    label_event_description: 'Event Description',
    label_engineer: 'Engineer',
    label_cc_engineer: 'CC Engineer',

    placeholder_region: 'Choose Region',
    placeholder_site: 'Choose Site',
    placeholder_ttNo: 'Enter TT No.',
    placeholder_ttName: 'Choose TT Name',
    placeholder_name: 'Choose Name',
    placeholder_priority: 'Choose Priority',
    placeholder_transferred: 'Choose Transferred',
    placeholder_status: 'Choose Status',
    placeholder_equipment: 'Choose Equipment',
    placeholder_plan_date: 'Choose Plan Date',
    placeholder_event_description: 'Enter Event Description',
    placeholder_timeRange: 'Time Range',
    placeholder_engineer: 'Choose Engineer',
    placeholder_cc_engineer: 'Choose CC Engineer',
    placeholder_reason: 'Reason...',

    button_add: 'Add',
    button_back: 'Back',
    button_dispatch: 'Dispatch',
    button_transfer: 'Transfer',
    button_accept: 'Accept',
    button_reject: 'Reject',
    button_extend: 'Extend',
    button_complete: 'Complete',
    button_close: 'Close',
    button_cancel: 'Cancel',
  },
  Site: {
    title_site_list: 'Site List',
    title_site_detail: 'Site Detail',

    text_total_sites: 'Total Sites',
    text_last_updated: 'Last Updated',
    text_site_schematic: 'Site Schematic',
    text_power: 'Power',
    text_voltage: 'Voltage',
    text_current: 'Current',
    text_status: 'Status',
    text_dc_system: 'DC System',
    text_battery: 'Battery',
    text_dc_load: 'DC Load',
    text_load: 'Load',
    text_generation: 'Generation',
    text_consumption: 'Consumption',
    text_frequency: 'Frequency',
    text_phase_voltage: '{{value}} Voltage',
    text_phase_current: '{{value}} Current',

    text_phase_a: 'Phase A',
    text_phase_b: 'Phase B',
    text_phase_c: 'Phase C',

    label_update_status: 'Update Status',

    placeholder_search_bar: 'Search by Region / Province / Site',
    placeholder_all_asset_type: 'All Assets Type',
    placeholder_search_alarm_name: 'Search Alarm Name',
    placeholder_assets_type: 'Assets Type',

    option_by_region: 'By Region',
    option_by_province: 'By Province',
    option_overview: 'Overview',
    option_device_list: 'Device List',
    option_alarms: 'Alarms',
    option_ac_power: 'AC Power',
    option_dc_power: 'DC Power',
  },
  TroubleTicket: {
    title_alarm_trouble_ticket: 'Alarm Trouble Tickets',
    title_filter: 'Filter',
    title_add: 'Add',
    title_add_ticket: 'Add Ticket',
    title_open_trouble_ticket: 'Open Trouble Tickets',
    title_closed_trouble_ticket: 'Closed Trouble Tickets',

    toast_success_add_comment: 'Comment added successfully',
    toast_success_create_ticket: 'Create Ticket successfully',
    toast_success_accept_ticket: 'Ticket accepted successfully',
    toast_success_reject_ticket: 'Ticket rejected successfully',
    toast_success_complete_ticket: 'Ticket completed successfully',
    toast_success_cancel_ticket: 'Ticket cancelled successfully',
    toast_success_close_ticket: 'Ticket closed successfully',

    tab_open_trouble_ticket: 'Open Trouble Tickets',
    tab_closed_trouble_ticket: 'Closed Trouble Tickets',

    text_confirm_add_ticket_description: 'Confirm to add alarm trouble ticket?',
    text_confirm_accept_ticket_description:
      'Confirm to accept alarm trouble ticket?',
    text_confirm_complete_ticket_description:
      'Are you sure you want to complete this ticket?',
    text_confirm_close_ticket_description:
      'Are you sure you want to close this ticket?',

    text_accept: 'Accept',
    text_reject: 'Reject',
    text_complete: 'Complete',
    text_cancel: 'Cancel',
    text_close: 'Close',

    text_ttName: 'TT Name',
    text_ttNo: 'TT No.',
    text_equipment: 'Equipment',
    text_assignedBy: 'Assigned By',
    text_site_name: 'Site Name',
    text_siteId: 'Site ID',
    text_priority: 'Priority',
    text_generated_time: 'Generated Time',
    text_end_time: 'End Time',
    text_region: 'Regions',
    text_response_time: 'Response Time',
    text_processing_duration: 'Processing Duration',
    text_warning_time: 'Warning Time',
    text_status: 'Status',
    text_transferred: 'Transferred',
    text_dispatch_time: 'Dispatch Time',
    text_duration: 'Duration',
    text_engineer: 'Engineer',
    text_email: 'Email',
    text_phone_number: 'Phone Number',
    text_cc_engineer: 'CC Engineer {{value}}',
    text_extension_time: 'Extension Time',
    text_update_time: 'Update Time',

    label_region: 'Regions',
    label_site: 'Sites',
    label_ttNo: 'TT No.',
    label_ttName: 'TT Name',
    label_name: 'Name',
    label_priority: 'Priority',
    label_transferred: 'Transferred',
    label_status: 'Status',
    label_equipment: 'Equipment',
    label_alarm_name: 'Alarm Name',
    label_event_description: 'Event Description',
    label_engineer: 'Engineer',
    label_cc_engineer: 'CC Engineer',

    placeholder_region: 'Choose Region',
    placeholder_site: 'Choose Site',
    placeholder_ttNo: 'Enter TT No.',
    placeholder_ttName: 'Choose TT Name',
    placeholder_name: 'Choose Name',
    placeholder_priority: 'Choose Priority',
    placeholder_transferred: 'Choose Transferred',
    placeholder_status: 'Choose Status',
    placeholder_equipment: 'Choose Equipment',
    placeholder_alarm_name: 'Choose Alarm Name',
    placeholder_event_description: 'Enter Event Description',
    placeholder_timeRange: 'Time Range',
    placeholder_engineer: 'Choose Engineer',
    placeholder_cc_engineer: 'Choose CC Engineer',
    placeholder_reason: 'Reason...',

    button_add: 'Add',
    button_back: 'Back',
    button_dispatch: 'Dispatch',
    button_transfer: 'Transfer',
    button_accept: 'Accept',
    button_reject: 'Reject',
    button_extend: 'Extend',
    button_complete: 'Complete',
    button_close: 'Close',
    button_cancel: 'Cancel',
  },
  WorkOrder: {
    title_extend_work_order: 'Extend Work Order',
    title_work_order_detail: 'Work Order Details',
    title_filter: 'Filter',
    title_dispatch: 'Dispatch',
    title_extend: 'Extend',
    title_transfer: 'Transfer',

    toast_success_transferred_ticket: 'Ticket transferred successfully',
    toast_success_extended_ticket: 'Ticket extended successfully',
    toast_success_dispatch_ticket: 'Ticket dispatch successfully',
    toast_success_add_comment: 'Comment added successfully',
    toast_success_agree_extend_workOrder:
      'Extend Work Order approved successfully',

    tab_description: 'Description',

    toast_success_reject_extend_workOrder:
      'Extend Work Order rejected successfully',
    text_confirm_agree_extension_workOrder_description:
      'Are you sure you want to agree the extension of this ticket?',
    text_confirm_reject_extension_workOrder_description:
      'Are you sure you want to reject the extension of this ticket?',
    text_open_ticket: 'Open Ticket',
    text_generated_date: 'Generated Date',
    text_extension_result: 'Extension Result',
    text_top: 'Top',
    text_high: 'High',
    text_medium: 'Medium',
    text_low: 'Low',
    text_yes: 'Yes',
    text_no: 'No',
    text_agree: 'Agree',
    text_reject: 'Reject',
    text_open: 'Open',
    text_dispatched: 'Dispatched',
    text_accepted: 'Accepted',
    text_rejected: 'Rejected',
    text_in_progress: 'In Progress',
    text_to_be_confirmed: 'To be confirmed',
    text_transferred: 'Transferred',
    text_closed: 'Closed',
    text_cancelled: 'Cancelled',
    text_to_be_approved: 'To be approved',
    text_approved: 'Approved',

    text_ttName: 'TT Name',
    text_ttNo: 'TT No.',
    text_equipment: 'Equipment',
    text_assignedBy: 'Assigned By',
    text_site_name: 'Site Name',
    text_siteId: 'Site ID',
    text_priority: 'Priority',
    text_generated_time: 'Generated Time',
    text_end_time: 'End Time',
    text_region: 'Regions',
    text_response_time: 'Response Time',
    text_processing_duration: 'Processing Duration',
    text_warning_time: 'Warning Time',
    text_cycle: 'Cycle',
    text_plan_date: 'Plan Date',
    text_status: 'Status',
    text_dispatch_time: 'Dispatch Time',
    text_duration: 'Duration',
    text_engineer: 'Engineer',
    text_email: 'Email',
    text_phone_number: 'Phone Number',
    text_cc_engineer: 'CC Engineer {{value}}',
    text_username: 'Username',
    text_extension_time: 'Extension Time',
    text_update_time: 'Update Time',

    label_region: 'Regions',
    label_site: 'Sites',
    label_ttNo: 'TT No.',
    label_name: 'Name',
    label_priority: 'Priority',
    label_transferred: 'Transferred',
    label_status: 'Status',
    label_equipment: 'Equipment',
    label_alarm_name: 'Alarm Name',
    label_event_description: 'Event Description',
    label_engineer: 'Engineer',
    label_cc_engineer: 'CC Engineer',
    label_extension_result: 'Extension Result',
    label_days: 'Days',
    label_hours: 'Hours',
    label_reason: 'Reason',

    placeholder_region: 'Choose Region',
    placeholder_site: 'Choose Site',
    placeholder_ttNo: 'Enter TT No.',
    placeholder_name: 'Choose Name',
    placeholder_priority: 'Choose Priority',
    placeholder_transferred: 'Choose Transferred',
    placeholder_status: 'Choose Status',
    placeholder_equipment: 'Choose Equipment',
    placeholder_alarm_name: 'Choose Alarm Name',
    placeholder_event_description: 'Enter Event Description',
    placeholder_timeRange: 'Time Range',
    placeholder_extension_result: 'Choose Extension Result',
    placeholder_engineer: 'Choose Engineer',
    placeholder_cc_engineer: 'Choose CC Engineer',
    placeholder_reason: 'Reason...',

    option_top: 'Top',
    option_high: 'High',
    option_medium: 'Medium',
    option_low: 'Low',
    option_yes: 'Yes',
    option_no: 'No',
    option_open: 'Open',
    option_dispatched: 'Dispatched',
    option_accepted: 'Accepted',
    option_rejected: 'Rejected',
    option_in_progress: 'In Progress',
    option_to_be_confirmed: 'To be confirmed',
    option_transferred: 'Transferred',
    option_closed: 'Closed',
    option_cancelled: 'Cancelled',
    option_to_be_approved: 'To be approved',
    option_approved: 'Approved',

    button_extend_work_order: 'Extend Work Order',
    button_agree: 'Agree',
    button_reject: 'Reject',
    button_back: 'Back',
  },
  Error: {
    internetError: 'Please check your internet connection',
    startDateLaterError: 'Start date cannot be later than end date',
    endDateEarlierError: 'End date cannot be earlier than start date',
    wrongPassword: 'Wrong Password',
    notAllFieldsFilled: 'Please fill all the fields',
    required: 'Required',
    minimum_length: 'minimum length is 9 characters',
    maximum_length: 'maximum length is 20 characters',
    passwords_must_match: 'Passwords must match',
    login_expired: 'Login session expired. Please login again.',
    unknown_server_error: 'Unknown server error',
    unexpected_server_error:
      'Unexpected server error, please contact administrator!',
  },
  //equipment operation status text
  Status: {
    //red text
    stopped: 'Stopped',
    float_charge: 'Float Charge',
    no_connection: 'No Connection',
    alarm: 'Alarm',
    error: 'Error',
    discharge: 'Discharge',
    close: 'Close',
    //blue text
    ready: 'Ready',
    normal: 'Normal',
    running: 'Running',
    stand_by: 'Standby...',
    open: 'Open',
  },
}
export type LanguageStrings = typeof en
export default en