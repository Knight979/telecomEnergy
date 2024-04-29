import { LanguageStrings } from './en'

const zh_hk: LanguageStrings = {
  Alarms: {
    title_alarm: '告警',
    title_alarm_detail: '告警詳情',

    option_open: '開放',
    option_close: '關閉',
    option_mask: '屏蔽',
    option_experts_advise: '專家建議',

    toast_success_add_comment: '添加評論成功',
    toast_success_add_mask_alarm: '移入到屏蔽告警成功',
    toast_success_delete_mask_alarm: '移入到全部告警成功',
    toast_success_update_alarm: '更新告警狀態成功',

    text_open_alarm: '開放告警',
    text_closed_alarm: '關閉告警',
    text_mask_alarm: '屏蔽告警',
    text_alarm: '{{value}} 告警',
    text_fsu_arrived_time: '到達 FSU 時間',
    text_create_time: '創建時間',
    text_event_id: '事件 ID',
    text_details: '詳情',
    text_current_value: '當前值',
    text_no_of_repeat: '重複次數',
    text_platform_time: '平台時間',
    text_latest_time: '最近更新',
    text_acknowledged_by: '已知人員',
    text_acknowledged_time: '已知時間',
    text_resolved_by: '處理人員',
    text_resolved_time: '處理時間',
    text_cleared_by: '清除人員',
    text_cleared_time: '清除時間',
    text_action_time: '操作時間',
    text_day: '日',
    text_hour: '時',
    text_minute: '分',
    text_no_advice: '無建議',

    button_move_to_all_alarms: '移入到全部告警',
    button_acknowledge: '已知',
    button_clear: '清除',
    button_mask: '屏蔽',

    label_severity: '嚴重等級',
    label_site_name: '站點名稱',
    label_event_id: '事件ID',
    label_alarm_name: '告警名稱',
    label_asset_name: '資產名稱',
    label_time_range: '時間範圍',
    label_acknowledged: '已知',
    label_clear: '清除',
    label_latest: '最近',

    placeholder_severity: '嚴重等級',
    placeholder_site_name: '站點名稱',
    placeholder_event_id: '事件ID',
    placeholder_alarm_name: '告警名稱',
    placeholder_asset_name: '資產名稱',
  },
  Authentication: {
    text_error_url_format: '伺服器 URL 必須以 http:// 或 https://開始',
    text_error_server_not_found: '未找到伺服器地址',
    text_error_wrong_verification_code: '驗證碼錯誤',
    text_contact_admin: '請聯繫管理員',
    text_forgot_password: '忘記密碼?',
    text_language: 'Language / 語言',
    text_version: '版本號: {{version}}',

    label_username: '用戶名稱',
    label_password: '密碼',
    label_server_location: '伺服器地址',
    label_verification_code: '驗證碼',

    button_login: '登入',
  },
  CCTV: {
    title_cctv: 'CCTV',
    placeholder_choose_site: '選擇站點',
    text_region: '區域',
    text_cctv_health: 'CCTV 健康度',
    text_total: '總數',
    text_address: '地址',
    button_alarm_detail: '告警詳情',
  },
  Navigation: {
    tab_overview: '概覽',
    tab_alarms: '告警',
    tab_GIS_Map: '地圖',
    tab_settings: '設置',
  },
  Common: {
    success: '成功',
    confirm: '確定',
    clear: '清除',
    submit: '提交',
    cancel: '取消',
    text_list_no_data_title: '無數據',
    text_list_no_data_subtitle: '請嘗試其它類別或再次刷新',
    text_critical: '高',
    text_major: '中',
    text_minor: '低',
    text_warning: '弱',
    text_sorting: '分類',
    text_filter: '過濾',
    button_yes: '是',
    button_no: '否',
    button_all: '全部',
    button_submit: '提交',
    button_clear: '清除',
    button_view_more: '查看更多',
    button_show_less: '縮略顯示',
    placeholder_startDate: '開始時間',
    placeholder_endDate: '結束時間',
    text_comment: '評論',
    text_solution: '方案',
    text_possible_cause: '故障分析',
    text_event_description: '事件詳情',
    text_description: '詳情',
    text_with_no_Prefix: '無 {{value}}',
    text_with_add_Prefix: '增加 {{value}}',
    text_updating: '已更新',
    text_not_updating: '未更新',
    text_error_required: '必填項',
    text_confirm_action: '您確定要 {{value}}?',

    option_daily: '日',
    option_weekly: '周',
    option_monthly: '月',
    option_yearly: '年',
    option_today: '日',
    option_week: '周',
    option_month: '月',
    option_year: '年',
    placeholder_start_date: '開始時間',
    placeholder_end_date: '結束時間',
  },
  Equipment: {
    title_equipment: '設備',
    text_asset_type: '資產類型',

    placeholder_site_list: '站點列表',
    placeholder_asset_type: '資產類型',
    placeholder_serach: '搜索',
    option_all: '全部',
    option_updating: '已更新',
    option_not_updating: '未更新',
  },

  GISMap: {
    title_gis_map: '地圖',
    text_region: '區域',
    text_last_update: '最近更新',
    text_coordinates: '經緯度',
    text_energy_proportion: '能源比例',

    placeholder_search_site_name: '按站點名稱搜索',
    placeholder_search_alarm_name: '按告警名稱搜索',

    button_site_summary: '站點',
    button_alarm_dashboard: '告警',

    option_today: '今天',
    option_last_week: '最近一週',
    option_last_month: '最近一個月',
  },
  HistoricalData: {
    title_historical_data: '历史数据',

    text_yAxis_text: '區域/ 省/ 站點',
    text_parameter_name: '參數名稱',

    label_Operation_time: '操作時間',
    label_time_point: '時間點',
    label_site_name: '站點',
    label_assets: '資產',
    label_parameter: '參數',

    placeholder_time_point: '時間點',
    placeholder_site_name: '站點',
    placeholder_assets: '資產',
    placeholder_parameter: '參數',

    button_confirm: '確定',
  },
  Log: {
    title_logs: '日誌',
    title_filter: '過濾',

    text_operator: '操作人員',
    text_operation_time: '操作時間',
    text_source: '來源',
    text_operation_name: '操作名稱',
    text_details: '詳情',
    text_status_success: '成功',
    text_status_fail: '失敗',
    text_error_no_apps_can_open: '無可用 APP 來打開此類文件',

    label_event: '事件',
    label_operator: '操作人員',
    label_operation_time: '操作時間',
    label_source: '來源',
    label_operation_object: '操作對象',
    label_operation_name: '操作名稱',
    label_operation_result: '操作結果',

    placeholder_event: '選擇事件',
    placeholder_operator: '選擇操作人員',
    placeholder_source: '選擇來源',
    placeholder_operation_object: '選擇操作對象',
    placeholder_operation_name: '選擇操作名稱',
    placeholder_operation_result: '選擇操作結果',

    option_operation_log: 'OSS 操作日誌',
    option_system_log: 'OSS 系統日誌',
    option_database: '數據庫',
    option_abnormal_running: '運行異常',
    opiton_cannot_complete: '無法完成',
    option_CCTV: 'CCTV',
    option_detailed_block: '詳情頁面',
    option_time_zone: '時區',
    option_navigation_to_admin_console: '進入控制後台',
    option_reports: '報表',
    option_logs: '日誌',
    option_alarms: '告警',
    option_work_order: '工單',
    optin_device_management: '設備管理',
    option_group_Asset_management: '分組 & 資產管理',
    option_access_card_list: '訪問卡片列表',
    option_alarm_management: '告警管理',
    option_report_subscription: '報表訂閱',
    option_dido_management: 'DIDO 管理',
    option_database_backup_restore: '數據庫備份 & 恢復',
    option_work_order_management: '工單管理',
    option_remote_control: '遠程控制',
    option_remote_modification: '遠程修改',
    option_revision: '修正',
    option_download: '下載',
    option_add: '添加',
    option_delete: '刪除',
    option_success: '成功',
    option_fail: '失敗',
  },
  Overview: {
    tab_energy: '能源',
    tab_site_communication_loss: '线下站点',
    tab_trouble_tickets: '工單',
    tab_fuel_consumption: '燃油消耗',
    tab_mains_energy: '市電能源',

    text_total_site: '站點總數',
    text_site_online: '線上站點',
    text_site_offline: '線下站點',
    text_offline_ratio: '下線率',
    text_alarm_statistics: '告警統計',
    text_functions_and_features: '功能特徵',
    button_site_list: '站點列表',
    button_cctv: 'CCTV',
    button_alarm_trouble_ticket: '告警工單',
    button_preventive_maintenance: '維修工單',
    button_log: '日誌',
    buttun_equipment: '設備',
    button_historical_data: '歷史數據',

    text_energy_generation_legend: '產生電量',
    text_energy_consumption_legend: '消耗電量',
    text_energy_yAxis_label: '能源 (kWh)',
    text_communication_loss_updating_legend: '已更新',
    text_communication_loss_not_updating_legend: '未更新',
    text_communication_loss_yAxis_label: '站點數量',
    text_trouble_tickets_open_legend: '開放',
    text_trouble_tickets_close_legend: '關閉',
    text_trouble_ticket_yAxis_label: '工單數量',
    text_fuel_consumption_yAxis_label: '升',
    text_mains_energy_yAxis_label: 'kWh',

    option_by_region: '按區域',
    option_by_province: '按省',
  },

  EquipmentDetails: {
    option_charts: '圖表',
    option_metrics: '參數',
    option_status: '狀態',
    option_remote: '遠程',
    option_engine: '引擎',
    option_generator: '發電機',
    option_main: '市電',
    option_log: '日誌',
    option_soh: 'SOH',
    option_battery_ambient_temperature: '電池環境溫度',
    option_battery_voltage: '電池電壓',
    option_battery_cell_voltage: '電池電芯電壓',

    label_close_breaker: '合併開關',
    label_mode: '模式',
    label_start_generator: '啟動機組',
    label_output_frequency: '輸出頻率',
    label_output_voltage: '輸出電壓',
    label_output_current: '輸出電流',
    label_fuel_vs_generator_on_off: '油位與機組狀態',
    label_auto_update: '自動更新',
    label_circuit_breaker: '斷路器',
    label_number: 'Number',
    label_ordinary_state: 'Ordinary State',
    label_alarm_related_relay: 'Alarm Related Relay',
    label_start_time: 'Start Time',

    toast_success_clear_fault: '清除故障成功',
    toast_success_clear_alarm: '清除告警成功',
    toast_success_update: '更新成功',
    toast_success_unlock: '解鎖成功',
    toast_success_switch_state: '切換狀態成功',
    toast_success_change_temperature: '改變溫度成功',
    toast_success_reset: '重置成功',
    toast_success_synchronized: '同步成功',
    toast_success_open_door: '打開成功',
    toast_success_test: 'Successful Operation',

    text_open: '開放',
    text_close: '關閉',
    text_stand_by: '待運行',
    text_operation_time: '操作時間',
    text_action: '操作',
    text_account: '用戶',
    text_result: '結果',
    text_abnormal: '異常',
    text_sub_healthy: '亞健康',
    text_healthy: '健康',
    text_type: '類型',
    text_enter_password: '請輸入密碼',
    text_internal_fan: '內部風扇',
    text_external_fan: '外部風扇',
    text_indoor_temperature: '室內溫度',
    text_temperature_difference: '溫差',
    text_locker_name: '鎖名稱',
    text_unlock_time: '解鎖時間',
    text_unlock_mode: '解鎖模式',
    text_unlock_by: '解鎖人員',
    text_host: '主機',
    text_slave: '從機',
    text_forward: '向前',
    text_backward: '向後',
    text_pause: '暫停',
    text_temperature: '溫度',
    text_engine_battery_voltage: '引擎電池電壓',
    text_coolant_temperature: '冷卻溫度',
    text_oil_pressure: '油壓',
    text_l1_l2_voltage: 'L1-L2 電壓',
    text_l2_l3_voltage: 'L2-L3 電壓',
    text_l3_l1_voltage: 'L3-L1 電壓',
    text_change_mode_auto: '確定切換為自動模式嗎?',
    text_change_mode_manual: '確定切換為手動模式嗎?',
    text_change_generator_on: '確定啟動機組嗎?',
    text_change_generator_off: '確定關閉機組嗎?',
    text_change_breaker_on: '確定合併開關嗎?',
    text_change_breaker_off: '確定斷開開關嗎?',
    text_close_breaker_s1: '確定合併開關 S1 嗎?',
    text_close_breaker_s2: '確定合併開關 S2 嗎?',
    text_turn_off_ats: '確定關閉嗎?',
    text_clear_fault: '確定清除故障嗎?',
    text_turn_on: '確定打開嗎?',
    text_turn_off: '確定關閉嗎?',
    text_make_changes: '確定修改這些嗎? ',
    text_open_door: '確定開門嗎?',
    text_open_lock: '確定開鎖嗎?',
    text_auto_update_on: '確定啟用自動更新嗎?',
    text_auto_update_off: '確定關閉自動更新嗎?',
    text_reset: '確定重置嗎?',
    text_clear_alarm: '確定清除告警嗎?',
    text_status_updated_time: '狀態更新時間',
    text_schedule_cleaning_time: '計劃清洗時間',
    text_total_fuel_consumption: '總耗油量',
    text_site: '站點',
    text_operation_status: '操作狀體',
    text_sc501_mode: 'SC501 模式',
    text_sc501: 'SC501',
    text_running_hours: '運行時間',
    text_measurement: '參數',
    text_value: '值',
    text_auto: '自動',
    text_manual: '手動',
    text_stop: '停止',
    text_on: '開啟',
    text_off: '關閉',
    text_breaker_closed: '{{-value}} 開關合併',
    text_breaker_disabled: '失能狀態 N/A',
    text_ats_mode: 'ATS 模式',
    text_breaker_status: '開關狀態',
    text_battery_total_capacity: '電池總容量',
    text_estimated_time_remaining: '預計剩餘時間',
    text_today: '今天',
    text_last_week: '最近一週',
    text_last_month: '最近一個月',
    text_energy_generation: '產生電量',
    text_statistics: '統計數據',
    text_lock: '鎖',
    text_normal_open: 'Normal Open',
    text_normal_close: 'Normal Close',

    button_open_door: '開鎖',
    button_reset: '重置',
    button_synchronize: '同步',
    button_clear_fault: '清除故障',
    button_clear_alarm: '清除告警',
    button_turn_off: '關閉',
    button_test: '測試',
  },
  Settings: {
    title_settings: '設置',
    title_about: '關於',
    title_language: '語言',
    title_time_zone: '時區',
    title_change_password: '修改密碼',
    button_logout: '退出登錄',
    text_version: '版本',
    text_confirm_logout: '確定退出嗎?',
    label_current_password: '原密碼',
    label_new_password: '新密碼',
    label_confirm_password: '確認新密碼',
    placeholder_current_password: '請輸入原密碼',
    placeholder_new_password: '請輸入新密碼',
    placeholder_confirm_password: '請再一次輸入新密碼',
    toast_success_change_password: '密碼已修改',
    toast_success_change_timezone: '時區更新成功',

    timezone: {
      '+1400': 'UTC + 14:00 基里巴斯岛',
      '+1300': 'UTC + 13:00 薩摩亞',
      '+1200': 'UTC + 12:00 奧克蘭',
      '+11': 'UTC + 11:00 所羅門群島',
      '+1000': 'UTC + 10:00 悉尼',
      '+0930': 'UTC + 9:30 阿德萊德',
      '+0900': 'UTC + 9:00 東京',
      '+0800': 'UTC + 8:00 北京',
      '+0700': 'UTC + 7:00 曼谷',
      '+0630': 'UTC + 6:30 仰光',
      '+0600': 'UTC + 6:00 達卡',
      '+545': 'UTC + 5:45 加德滿都',
      '+0530': 'UTC + 5:30 新德里',
      '+0500': 'UTC + 5 塔什干',
      '+0430': 'UTC + 4:30 喀布爾',
      '+0400': 'UTC + 4 第比利斯',
      '+0330': 'UTC + 3:30 德黑蘭',
      '+0300': 'UTC + 3 莫斯科',
      '+0200': 'UTC + 2:00 雅典',
      '+0100': 'UTC + 1 阿斯特爾丹',
      '+0000': 'UTC + 0:00 倫敦',
      '-0100': 'UTC - 1 佛得角',
      '-0200': 'UTC - 2:00 世界协调时间 - 2',
      '-0300': 'UTC - 3:00 巴西利亞',
      '-0330': 'UTC - 3:30 紐芬蘭',
      '-0400': 'UTC - 4:00 大西洋時間',
      '-0430': 'UTC - 4:30 卡拉卡斯',
      '-0500': 'UTC - 5:00 東部時間',
      '-0600': 'UTC - 6:00 中部時間',
      '-0700': 'UTC - 7:00 亞利桑那州',
      '-0800': 'UTC - 8:00 太平洋時間',
      '-0900': 'UTC - 9:00 阿拉斯加州',
      '-1000': 'UTC - 10:00 夏威夷',
      '-1100': 'UTC - 11:00 世界协调时间 - 11',
      '-1200': 'UTC - 12:00 国际日期变更线西边',
    },
  },
  PreventiveMaintenance: {
    title_preventive_maintenance: '維修工單',
    title_filter: '過濾',
    title_add: '增加',
    title_open_ticket: '開放工單',
    title_closed_ticket: '關閉工單',
    title_work_order_detail: '工單詳情',

    toast_success_add_comment: '添加評論成功',
    toast_success_create_ticket: '創建工單成功',
    toast_success_accept_ticket: '接受工單成功',
    toast_success_reject_ticket: '已拒絕工單',
    toast_success_complete_ticket: '已完成工單',
    toast_success_cancel_ticket: '已取消工單',
    toast_success_close_ticket: '已關閉工單',

    tab_open_tickets: '開放工單',
    tab_closed_tickets: '關閉工單',
    tab_cycle_tickets_configuration: '循環工單配置',

    text_confirm_add_ticket_description: '確定添加告警工單?',
    text_confirm_accept_ticket_description: '確定接受此工單?',
    text_confirm_complete_ticket_description: '確定完成此工單?',
    text_confirm_close_ticket_description: '確定關閉此工單?',

    text_accept: '接受',
    text_reject: '拒絕',
    text_complete: '完成',
    text_cancel: '取消',
    text_close: '關閉',

    text_ttName: '工單名稱',
    text_ttNo: '工單號',
    text_equipment: '設備',
    text_assignedBy: '委託人',
    text_site_name: '站點名稱',
    text_siteId: '站點 ID',
    text_priority: '優先級',
    text_generated_time: '創建時間',
    text_end_time: '結束時間',
    text_region: '區域',
    text_cycle: '循環',
    text_response_time: '響應時間',
    text_plan_date: '計劃日期',
    text_warning_time: '警告時間',
    text_status: '狀態',
    text_transferred: '轉發',
    text_dispatch_time: '派發時間',
    text_duration: '持續時間',
    text_engineer: '工程師',
    text_email: '郵箱',
    text_phone_number: '手機號碼',
    text_cc_engineer: '抄送工程師 {{value}}',
    text_extension_time: '延長時間',
    text_update_time: '更新時間',

    label_region: '區域',
    label_site: '站點',
    label_ttNo: '工單號',
    label_ttName: '工單名稱',
    label_name: '名稱',
    label_priority: '優先級',
    label_transferred: '轉發',
    label_status: '狀態',
    label_equipment: '設備',
    label_plan_date: '計劃日期',
    label_cycle: '循環',
    label_every: '每',
    label_day: '天',
    label_event_description: '事件詳情',
    label_engineer: '工程師',
    label_cc_engineer: '抄送工程師',

    placeholder_region: '選擇區域',
    placeholder_site: '選擇站點',
    placeholder_ttNo: '請輸入工單號',
    placeholder_ttName: '選擇工單名稱',
    placeholder_name: '選擇名稱',
    placeholder_priority: '選擇優先級',
    placeholder_transferred: '選擇是否轉發',
    placeholder_status: '選擇狀態',
    placeholder_equipment: '選擇設備',
    placeholder_plan_date: '選擇計劃日期',
    placeholder_event_description: '請輸入事件詳情',
    placeholder_timeRange: '時間範圍',
    placeholder_engineer: '選擇工程師',
    placeholder_cc_engineer: '選擇抄送工程師',
    placeholder_reason: '原因',

    button_add: '添加',
    button_back: '返回',
    button_dispatch: '派發',
    button_transfer: '轉發',
    button_accept: '接受',
    button_reject: '拒絕',
    button_extend: '延時',
    button_complete: '完成',
    button_close: '關閉',
    button_cancel: '取消',
  },
  Site: {
    title_site_list: '站點列表',
    title_site_detail: '站點詳情',

    text_total_sites: '站點總數',
    text_last_updated: '最近更新',
    text_site_schematic: '站點示意圖',
    text_power: '功率',
    text_voltage: '電壓',
    text_current: '電流',
    text_status: '狀態',
    text_dc_system: 'DC 系統',
    text_battery: '電池',
    text_dc_load: 'DC 負載',
    text_load: '負載',
    text_generation: '產生電量',
    text_consumption: '消耗電量',
    text_frequency: '頻率',
    text_phase_voltage: '{{value}} 電壓',
    text_phase_current: '{{value}} 電流',

    text_phase_a: 'A相位',
    text_phase_b: 'B相位',
    text_phase_c: 'C相位',

    label_update_status: '更新狀態',

    placeholder_search_bar: '搜索區域 / 省 / 站點',
    placeholder_all_asset_type: '全部資產類型',
    placeholder_search_alarm_name: '按告警名稱搜索',
    placeholder_assets_type: '資產類型',

    option_by_region: '區域',
    option_by_province: '省',
    option_overview: '概覽',
    option_device_list: '設備',
    option_alarms: '告警',
    option_ac_power: 'AC 功率',
    option_dc_power: 'DC 功率',
  },
  TroubleTicket: {
    title_alarm_trouble_ticket: '告警工單',
    title_filter: '過濾',
    title_add: '增加',
    title_add_ticket: '增加工單',
    title_open_trouble_ticket: '開放工單',
    title_closed_trouble_ticket: '關閉工單',

    toast_success_add_comment: '添加評論成功',
    toast_success_create_ticket: '創建工單成功',
    toast_success_accept_ticket: '接受工單成功',
    toast_success_reject_ticket: '拒絕工單成功',
    toast_success_complete_ticket: '已完成工單',
    toast_success_cancel_ticket: '已取消工單',
    toast_success_close_ticket: '已關閉工單',

    tab_open_trouble_ticket: '開放工單',
    tab_closed_trouble_ticket: '關閉工單',

    text_confirm_add_ticket_description: '確定添加告警工單?',
    text_confirm_accept_ticket_description: '確定接受告警工單?',
    text_confirm_complete_ticket_description: '確定完成此工單?',
    text_confirm_close_ticket_description: '確定關閉此工單?',

    text_accept: '接受',
    text_reject: '拒絕',
    text_complete: '完成',
    text_cancel: '取消',
    text_close: '關閉',

    text_ttName: '工單名稱',
    text_ttNo: '工單號',
    text_equipment: '設備',
    text_assignedBy: '委託人',
    text_site_name: '站點名稱',
    text_siteId: '站點 ID',
    text_priority: '優先級',
    text_generated_time: '創建時間',
    text_end_time: '結束時間',
    text_region: '區域',
    text_response_time: '響應時間',
    text_processing_duration: '處理時間',
    text_warning_time: '告警時間',
    text_status: '狀態',
    text_transferred: '轉發',
    text_dispatch_time: '派發時間',
    text_duration: '持續時間',
    text_engineer: '工程師',
    text_email: '郵箱',
    text_phone_number: '手機號',
    text_cc_engineer: '抄送工程師 {{value}}',
    text_extension_time: '延長時間',
    text_update_time: '更新時間',

    label_region: '區域',
    label_site: '站點',
    label_ttNo: '工單號',
    label_ttName: '工單名稱',
    label_name: '名稱',
    label_priority: '優先級',
    label_transferred: '轉發',
    label_status: '狀態',
    label_equipment: '設備',
    label_alarm_name: '告警名稱',
    label_event_description: '事件詳情',
    label_engineer: '工程師',
    label_cc_engineer: '抄送工程師',

    placeholder_region: '選擇區域',
    placeholder_site: '選擇站點',
    placeholder_ttNo: '請輸入工單號',
    placeholder_ttName: '選擇工單名稱',
    placeholder_name: '選擇名稱',
    placeholder_priority: '選擇優先級',
    placeholder_transferred: '選擇是否轉發',
    placeholder_status: '選擇狀態',
    placeholder_equipment: '選擇設備',
    placeholder_alarm_name: '選擇告警名稱',
    placeholder_event_description: '請輸入事件詳情',
    placeholder_timeRange: '時間範圍',
    placeholder_engineer: '選擇工程師',
    placeholder_cc_engineer: '選擇抄送工程師',
    placeholder_reason: '原因',

    button_add: '增加',
    button_back: '返回',
    button_dispatch: '派發',
    button_transfer: '轉發',
    button_accept: '接受',
    button_reject: '拒絕',
    button_extend: '延時',
    button_complete: '完成',
    button_close: '關閉',
    button_cancel: '取消',
  },
  WorkOrder: {
    title_extend_work_order: '延時工單',
    title_work_order_detail: '工單詳情',
    title_filter: '過濾',
    title_dispatch: '派發',
    title_extend: '延時',
    title_transfer: '轉發',

    toast_success_transferred_ticket: '工單轉發成功',
    toast_success_extended_ticket: '工單延時成功',
    toast_success_dispatch_ticket: '工單派發成功',
    toast_success_add_comment: '評論添加成功',
    toast_success_agree_extend_workOrder: '審批延時工單成功',

    tab_description: '詳情',

    toast_success_reject_extend_workOrder: '已拒絕延時工單',
    text_confirm_agree_extension_workOrder_description: '確定同意延時此工單?',
    text_confirm_reject_extension_workOrder_description: '確定拒絕延時此工單?',
    text_open_ticket: '開放工單',
    text_generated_date: '創建時間',
    text_extension_result: '延時結果',
    text_top: '優',
    text_high: '高',
    text_medium: '中',
    text_low: '低',
    text_yes: '是',
    text_no: '否',
    text_agree: '同意',
    text_reject: '拒絕',
    text_open: '開放',
    text_dispatched: '派發',
    text_accepted: '接受',
    text_rejected: '拒絕',
    text_in_progress: '處理中',
    text_to_be_confirmed: '待確認',
    text_transferred: '轉發',
    text_closed: '關閉',
    text_cancelled: '取消',
    text_to_be_approved: '待審批',
    text_approved: '審批',

    text_ttName: '工單名稱',
    text_ttNo: '工單號',
    text_equipment: '設備',
    text_assignedBy: '委託人',
    text_site_name: '站點名稱',
    text_siteId: '站點 ID',
    text_priority: '優先級',
    text_generated_time: '創建時間',
    text_end_time: '結束時間',
    text_region: '區域',
    text_response_time: '響應時間',
    text_processing_duration: '處理時間',
    text_warning_time: '告警時間',
    text_cycle: '循環',
    text_plan_date: '計劃日期',
    text_status: '狀態',
    text_dispatch_time: '派發時間',
    text_duration: '持續時間',
    text_engineer: '工程師',
    text_email: '郵箱',
    text_phone_number: '手機號',
    text_cc_engineer: '抄送工程師 {{value}}',
    text_username: '用戶名',
    text_extension_time: '延長時間',
    text_update_time: '更新時間',

    label_region: '區域',
    label_site: '站點',
    label_ttNo: '工單號',
    label_name: '名稱',
    label_priority: '優先級',
    label_transferred: '轉發',
    label_status: '狀態',
    label_equipment: '設備',
    label_alarm_name: '告警名稱',
    label_event_description: '事件詳情',
    label_engineer: '工程師',
    label_cc_engineer: '抄送工程師',
    label_extension_result: '延時結果',
    label_days: '天',
    label_hours: '時',
    label_reason: '原因',

    placeholder_region: '選擇區域',
    placeholder_site: '選擇站點',
    placeholder_ttNo: '請輸入工單號',
    placeholder_name: '選擇名稱',
    placeholder_priority: '選擇優先級',
    placeholder_transferred: '選擇轉發',
    placeholder_status: '選擇狀態',
    placeholder_equipment: '選擇設備',
    placeholder_alarm_name: '選擇告警名稱',
    placeholder_event_description: '請輸入事件詳情',
    placeholder_timeRange: '時間範圍',
    placeholder_extension_result: '選擇延時結果',
    placeholder_engineer: '選擇工程師',
    placeholder_cc_engineer: '選擇抄送工程師',
    placeholder_reason: '原因',

    option_top: '優',
    option_high: '高',
    option_medium: '中',
    option_low: '低',
    option_yes: '是',
    option_no: '否',
    option_open: '開放',
    option_dispatched: '派發',
    option_accepted: '接受',
    option_rejected: '拒絕',
    option_in_progress: '處理中',
    option_to_be_confirmed: '待確認',
    option_transferred: '轉發',
    option_closed: '關閉',
    option_cancelled: '取消',
    option_to_be_approved: '待審批',
    option_approved: '審批',

    button_extend_work_order: '延時工單',
    button_agree: '同意',
    button_reject: '拒絕',
    button_back: '返回',
  },
  Error: {
    internetError: '請檢查網路',
    startDateLaterError: '開始日期應該早於結束日期',
    endDateEarlierError: '結束日期應該晚於開始日期',
    wrongPassword: '密碼錯誤',
    notAllFieldsFilled: '請填寫所有項',
    required: '必填項',
    minimum_length: '最小長度是 9 個字符',
    maximum_length: '最大長度是 20 個字符',
    passwords_must_match: '密碼必須匹配',
    login_expired: '登錄過期，請重新登錄',
    unknown_server_error: '未知服務器錯誤',
    unexpected_server_error: '未知服務器錯誤，請聯繫管理員!',
  },
  //equipment operation status text
  Status: {
    //red text
    stopped: '停止',
    float_charge: '浮充',
    no_connection: '斷開連接',
    alarm: '告警',
    error: '錯誤',
    discharge: '放電',
    close: '關閉',
    //blue text
    ready: '準備',
    normal: '正常',
    running: '運行中',
    stand_by: '待運行',
    open: '開放',
  },
}

export default zh_hk
