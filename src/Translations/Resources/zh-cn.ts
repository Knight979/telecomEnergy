import { LanguageStrings } from './en'

const zh_cn: LanguageStrings = {
  Alarms: {
    title_alarm: '告警',
    title_alarm_detail: '告警详情',

    option_open: '开放',
    option_close: '关闭',
    option_mask: '屏蔽',
    option_experts_advise: '专家建议',

    toast_success_add_comment: '添加评论成功',
    toast_success_add_mask_alarm: '移入到屏蔽告警成功',
    toast_success_delete_mask_alarm: '移入到全部告警成功',
    toast_success_update_alarm: '更新告警状态成功',

    text_open_alarm: '开放告警',
    text_closed_alarm: '关闭告警',
    text_mask_alarm: '屏蔽告警',
    text_alarm: '{{value}} 告警',
    text_fsu_arrived_time: '到达 FSU 时间',
    text_create_time: '创建时间',
    text_event_id: '事件 ID',
    text_details: '详情',
    text_current_value: '当前值',
    text_no_of_repeat: '重複次数',
    text_platform_time: '平台时间',
    text_latest_time: '最近更新',
    text_acknowledged_by: '已知人员',
    text_acknowledged_time: '已知时间',
    text_resolved_by: '处理人员',
    text_resolved_time: '处理时间',
    text_cleared_by: '清除人员',
    text_cleared_time: '清除时间',
    text_action_time: '操作时间',
    text_day: '日',
    text_hour: '时',
    text_minute: '分',
    text_no_advice: '无建议',

    button_move_to_all_alarms: '移入到全部告警',
    button_acknowledge: '已知',
    button_clear: '清除',
    button_mask: '屏蔽',

    label_severity: '严重等级',
    label_site_name: '站点名称',
    label_event_id: '事件ID',
    label_alarm_name: '告警名称',
    label_asset_name: '资产名称',
    label_time_range: '时间范围',
    label_acknowledged: '已知',
    label_clear: '清除',
    label_latest: '最近',

    placeholder_severity: '严重等级',
    placeholder_site_name: '站点名称',
    placeholder_event_id: '事件ID',
    placeholder_alarm_name: '告警名称',
    placeholder_asset_name: '资产名称',
  },
  Authentication: {
    text_error_url_format: '伺服器 URL 必须以 http:// 或 https://开始',
    text_error_server_not_found: '未找到伺服器地址',
    text_error_wrong_verification_code: '验证码错误',
    text_contact_admin: '请联繫管理员',
    text_forgot_password: '忘记密码?',
    text_language: 'Language / 语言',
    text_version: '版本号: {{version}}',

    label_username: '用户名称',
    label_password: '密码',
    label_server_location: '伺服器地址',
    label_verification_code: '验证码',

    button_login: '登入',
  },
  CCTV: {
    title_cctv: 'CCTV',
    placeholder_choose_site: '选择站点',
    text_region: '区域',
    text_cctv_health: 'CCTV 健康度',
    text_total: '总数',
    text_address: '地址',
    button_alarm_detail: '告警详情',
  },
  Navigation: {
    tab_overview: '概览',
    tab_alarms: '告警',
    tab_GIS_Map: '地图',
    tab_settings: '设置',
  },
  Common: {
    success: '成功',
    confirm: '确定',
    clear: '清除',
    submit: '提交',
    cancel: '取消',
    text_list_no_data_title: '无数据',
    text_list_no_data_subtitle: '请尝试其它类别或再次刷新',
    text_critical: '高',
    text_major: '中',
    text_minor: '低',
    text_warning: '弱',
    text_sorting: '分类',
    text_filter: '过滤',
    button_yes: '是',
    button_no: '否',
    button_all: '全部',
    button_submit: '提交',
    button_clear: '清除',
    button_view_more: '查看更多',
    button_show_less: '缩略显示',
    placeholder_startDate: '开始时间',
    placeholder_endDate: '结束时间',
    text_comment: '评论',
    text_solution: '方案',
    text_possible_cause: '故障分析',
    text_event_description: '事件详情',
    text_description: '详情',
    text_with_no_Prefix: '无 {{value}}',
    text_with_add_Prefix: '增加 {{value}}',
    text_updating: '已更新',
    text_not_updating: '未更新',
    text_error_required: '必填项',
    text_confirm_action: '您确定要 {{value}}?',

    option_daily: '日',
    option_weekly: '周',
    option_monthly: '月',
    option_yearly: '年',
    option_today: '日',
    option_week: '周',
    option_month: '月',
    option_year: '年',
    placeholder_start_date: '开始时间',
    placeholder_end_date: '结束时间',
  },
  Equipment: {
    title_equipment: '设备',
    text_asset_type: '资产类型',

    placeholder_site_list: '站点列表',
    placeholder_asset_type: '资产类型',
    placeholder_serach: '搜索',
    option_all: '全部',
    option_updating: '已更新',
    option_not_updating: '未更新',
  },

  GISMap: {
    title_gis_map: '地图',
    text_region: '区域',
    text_last_update: '最近更新',
    text_coordinates: '经纬度',
    text_energy_proportion: '能源比例',

    placeholder_search_site_name: '按站点名称搜索',
    placeholder_search_alarm_name: '按告警名称搜索',

    button_site_summary: '站点',
    button_alarm_dashboard: '告警',

    option_today: '今天',
    option_last_week: '最近一週',
    option_last_month: '最近一个月',
  },
  HistoricalData: {
    title_historical_data: '历史数据',

    text_yAxis_text: '区域/ 省/ 站点',
    text_parameter_name: '参数名称',

    label_Operation_time: '操作时间',
    label_time_point: '时间点',
    label_site_name: '站点',
    label_assets: '资产',
    label_parameter: '参数',

    placeholder_time_point: '时间点',
    placeholder_site_name: '站点',
    placeholder_assets: '资产',
    placeholder_parameter: '参数',

    button_confirm: '确定',
  },
  Log: {
    title_logs: '日誌',
    title_filter: '过滤',

    text_operator: '操作人员',
    text_operation_time: '操作时间',
    text_source: '来源',
    text_operation_name: '操作名称',
    text_details: '详情',
    text_status_success: '成功',
    text_status_fail: '失败',
    text_error_no_apps_can_open: '无可用 APP 来打开此类文件',

    label_event: '事件',
    label_operator: '操作人员',
    label_operation_time: '操作时间',
    label_source: '来源',
    label_operation_object: '操作对象',
    label_operation_name: '操作名称',
    label_operation_result: '操作结果',

    placeholder_event: '选择事件',
    placeholder_operator: '选择操作人员',
    placeholder_source: '选择来源',
    placeholder_operation_object: '选择操作对象',
    placeholder_operation_name: '选择操作名称',
    placeholder_operation_result: '选择操作结果',

    option_operation_log: 'OSS 操作日誌',
    option_system_log: 'OSS 系统日誌',
    option_database: '数据库',
    option_abnormal_running: '运行异常',
    opiton_cannot_complete: '无法完成',
    option_CCTV: 'CCTV',
    option_detailed_block: '详情页面',
    option_time_zone: '时区',
    option_navigation_to_admin_console: '进入控制后台',
    option_reports: '报表',
    option_logs: '日誌',
    option_alarms: '告警',
    option_work_order: '工单',
    optin_device_management: '设备管理',
    option_group_Asset_management: '分组 & 资产管理',
    option_access_card_list: '访问卡片列表',
    option_alarm_management: '告警管理',
    option_report_subscription: '报表订阅',
    option_dido_management: 'DIDO 管理',
    option_database_backup_restore: '数据库备份 & 恢復',
    option_work_order_management: '工单管理',
    option_remote_control: '远程控制',
    option_remote_modification: '远程修改',
    option_revision: '修正',
    option_download: '下载',
    option_add: '添加',
    option_delete: '删除',
    option_success: '成功',
    option_fail: '失败',
  },
  Overview: {
    tab_energy: '能源',
    tab_site_communication_loss: '线下站点',
    tab_trouble_tickets: '工单',
    tab_fuel_consumption: '燃油消耗',
    tab_mains_energy: '市电能源',

    text_total_site: '站点总数',
    text_site_online: '线上站点',
    text_site_offline: '线下站点',
    text_offline_ratio: '下线率',
    text_alarm_statistics: '告警统计',
    text_functions_and_features: '功能特徵',
    button_site_list: '站点列表',
    button_cctv: 'CCTV',
    button_alarm_trouble_ticket: '告警工单',
    button_preventive_maintenance: '维修工单',
    button_log: '日誌',
    buttun_equipment: '设备',
    button_historical_data: '历史数据',

    text_energy_generation_legend: '产生电量',
    text_energy_consumption_legend: '消耗电量',
    text_energy_yAxis_label: '能源 (kWh)',
    text_communication_loss_updating_legend: '已更新',
    text_communication_loss_not_updating_legend: '未更新',
    text_communication_loss_yAxis_label: '站点数量',
    text_trouble_tickets_open_legend: '开放',
    text_trouble_tickets_close_legend: '关闭',
    text_trouble_ticket_yAxis_label: '工单数量',
    text_fuel_consumption_yAxis_label: '升',
    text_mains_energy_yAxis_label: 'kWh',

    option_by_region: '按区域',
    option_by_province: '按省',
  },

  EquipmentDetails: {
    option_charts: '图表',
    option_metrics: '参数',
    option_status: '状态',
    option_remote: '远程',
    option_engine: '引擎',
    option_generator: '发电机',
    option_main: '市电',
    option_log: '日誌',
    option_soh: 'SOH',
    option_battery_ambient_temperature: '电池环境温度',
    option_battery_voltage: '电池电压',
    option_battery_cell_voltage: '电池电芯电压',

    label_close_breaker: '合併开关',
    label_mode: '模式',
    label_start_generator: '启动机组',
    label_output_frequency: '输出频率',
    label_output_voltage: '输出电压',
    label_output_current: '输出电流',
    label_fuel_vs_generator_on_off: '油位与机组状态',
    label_auto_update: '自动更新',
    label_circuit_breaker: '断路器',
    label_number: 'Number',
    label_ordinary_state: 'Ordinary State',
    label_alarm_related_relay: 'Alarm Related Relay',
    label_start_time: 'Start Time',

    toast_success_clear_fault: '清除故障成功',
    toast_success_clear_alarm: '清除告警成功',
    toast_success_update: '更新成功',
    toast_success_unlock: '解锁成功',
    toast_success_switch_state: '切换状态成功',
    toast_success_change_temperature: '改变温度成功',
    toast_success_reset: '重置成功',
    toast_success_synchronized: '同步成功',
    toast_success_open_door: '打开成功',
    toast_success_test: 'Successful Operation',

    text_open: '开放',
    text_close: '关闭',
    text_stand_by: '待运行',
    text_operation_time: '操作时间',
    text_action: '操作',
    text_account: '用户',
    text_result: '结果',
    text_abnormal: '异常',
    text_sub_healthy: '亚健康',
    text_healthy: '健康',
    text_type: '类型',
    text_enter_password: '请输入密码',
    text_internal_fan: '内部风扇',
    text_external_fan: '外部风扇',
    text_indoor_temperature: '室内温度',
    text_temperature_difference: '温差',
    text_locker_name: '锁名称',
    text_unlock_time: '解锁时间',
    text_unlock_mode: '解锁模式',
    text_unlock_by: '解锁人员',
    text_host: '主机',
    text_slave: '从机',
    text_forward: '向前',
    text_backward: '向后',
    text_pause: '暂停',
    text_temperature: '温度',
    text_engine_battery_voltage: '引擎电池电压',
    text_coolant_temperature: '冷却温度',
    text_oil_pressure: '油压',
    text_l1_l2_voltage: 'L1-L2 电压',
    text_l2_l3_voltage: 'L2-L3 电压',
    text_l3_l1_voltage: 'L3-L1 电压',
    text_change_mode_auto: '确定切换为自动模式吗?',
    text_change_mode_manual: '确定切换为手动模式吗?',
    text_change_generator_on: '确定启动机组吗?',
    text_change_generator_off: '确定关闭机组吗?',
    text_change_breaker_on: '确定合併开关吗?',
    text_change_breaker_off: '确定断开开关吗?',
    text_close_breaker_s1: '确定合併开关 S1 吗?',
    text_close_breaker_s2: '确定合併开关 S2 吗?',
    text_turn_off_ats: '确定关闭吗?',
    text_clear_fault: '确定清除故障吗?',
    text_turn_on: '确定打开吗?',
    text_turn_off: '确定关闭吗?',
    text_make_changes: '确定修改这些吗? ',
    text_open_door: '确定开门吗?',
    text_open_lock: '确定开锁吗?',
    text_auto_update_on: '确定启用自动更新吗?',
    text_auto_update_off: '确定关闭自动更新吗?',
    text_reset: '确定重置吗?',
    text_clear_alarm: '确定清除告警吗?',
    text_status_updated_time: '状态更新时间',
    text_schedule_cleaning_time: '计划清洗时间',
    text_total_fuel_consumption: '总耗油量',
    text_site: '站点',
    text_operation_status: '操作状体',
    text_sc501_mode: 'SC501 模式',
    text_sc501: 'SC501',
    text_running_hours: '运行时间',
    text_measurement: '参数',
    text_value: '值',
    text_auto: '自动',
    text_manual: '手动',
    text_stop: '停止',
    text_on: '开启',
    text_off: '关闭',
    text_breaker_closed: '{{-value}} 开关合併',
    text_breaker_disabled: '失能状态 N/A',
    text_ats_mode: 'ATS 模式',
    text_breaker_status: '开关状态',
    text_battery_total_capacity: '电池总容量',
    text_estimated_time_remaining: '预计剩馀时间',
    text_today: '今天',
    text_last_week: '最近一週',
    text_last_month: '最近一个月',
    text_energy_generation: '产生电量',
    text_statistics: '统计数据',
    text_lock: '锁',
    text_normal_open: 'Normal Open',
    text_normal_close: 'Normal Close',

    button_open_door: '开锁',
    button_reset: '重置',
    button_synchronize: '同步',
    button_clear_fault: '清除故障',
    button_clear_alarm: '清除告警',
    button_turn_off: '关闭',
    button_test: '测试',
  },
  Settings: {
    title_settings: '设置',
    title_about: '关于',
    title_language: '语言',
    title_time_zone: '时区',
    title_change_password: '修改密码',
    button_logout: '退出登录',
    text_version: '版本',
    text_confirm_logout: '确定退出吗?',
    label_current_password: '原密码',
    label_new_password: '新密码',
    label_confirm_password: '确认新密码',
    placeholder_current_password: '请输入原密码',
    placeholder_new_password: '请输入新密码',
    placeholder_confirm_password: '请再一次输入新密码',
    toast_success_change_password: '密码已修改',
    toast_success_change_timezone: '时区更新成功',

    timezone: {
      '+1400': 'UTC + 14:00 基里巴斯岛',
      '+1300': 'UTC + 13:00 萨摩亚',
      '+1200': 'UTC + 12:00 奥克兰',
      '+11': 'UTC + 11:00 所罗门群岛',
      '+1000': 'UTC + 10:00 悉尼',
      '+0930': 'UTC + 9:30 阿德莱德',
      '+0900': 'UTC + 9:00 东京',
      '+0800': 'UTC + 8:00 北京',
      '+0700': 'UTC + 7:00 曼谷',
      '+0630': 'UTC + 6:30 仰光',
      '+0600': 'UTC + 6:00 达卡',
      '+545': 'UTC + 5:45 加德满都',
      '+0530': 'UTC + 5:30 新德里',
      '+0500': 'UTC + 5 塔什干',
      '+0430': 'UTC + 4:30 喀布尔',
      '+0400': 'UTC + 4 第比利斯',
      '+0330': 'UTC + 3:30 德黑兰',
      '+0300': 'UTC + 3 莫斯科',
      '+0200': 'UTC + 2:00 雅典',
      '+0100': 'UTC + 1 阿斯特尔丹',
      '+0000': 'UTC + 0:00 伦敦',
      '-0100': 'UTC - 1 佛得角',
      '-0200': 'UTC - 2:00 世界协调时间 - 2',
      '-0300': 'UTC - 3:00 巴西利亚',
      '-0330': 'UTC - 3:30 纽芬兰',
      '-0400': 'UTC - 4:00 大西洋时间',
      '-0430': 'UTC - 4:30 卡拉卡斯',
      '-0500': 'UTC - 5:00 东部时间',
      '-0600': 'UTC - 6:00 中部时间',
      '-0700': 'UTC - 7:00 亚利桑那州',
      '-0800': 'UTC - 8:00 太平洋时间',
      '-0900': 'UTC - 9:00 阿拉斯加州',
      '-1000': 'UTC - 10:00 夏威夷',
      '-1100': 'UTC - 11:00 世界协调时间 - 11',
      '-1200': 'UTC - 12:00 国际日期变更线西边',
    },
  },
  PreventiveMaintenance: {
    title_preventive_maintenance: '维修工单',
    title_filter: '过滤',
    title_add: '增加',
    title_open_ticket: '开放工单',
    title_closed_ticket: '关闭工单',
    title_work_order_detail: '工单详情',

    toast_success_add_comment: '添加评论成功',
    toast_success_create_ticket: '创建工单成功',
    toast_success_accept_ticket: '接受工单成功',
    toast_success_reject_ticket: '已拒绝工单',
    toast_success_complete_ticket: '已完成工单',
    toast_success_cancel_ticket: '已取消工单',
    toast_success_close_ticket: '已关闭工单',

    tab_open_tickets: '开放工单',
    tab_closed_tickets: '关闭工单',
    tab_cycle_tickets_configuration: '循环工单配置',

    text_confirm_add_ticket_description: '确定添加告警工单?',
    text_confirm_accept_ticket_description: '确定接受此工单?',
    text_confirm_complete_ticket_description: '确定完成此工单?',
    text_confirm_close_ticket_description: '确定关闭此工单?',

    text_accept: '接受',
    text_reject: '拒绝',
    text_complete: '完成',
    text_cancel: '取消',
    text_close: '关闭',

    text_ttName: '工单名称',
    text_ttNo: '工单号',
    text_equipment: '设备',
    text_assignedBy: '委託人',
    text_site_name: '站点名称',
    text_siteId: '站点 ID',
    text_priority: '优先级',
    text_generated_time: '创建时间',
    text_end_time: '结束时间',
    text_region: '区域',
    text_cycle: '循环',
    text_response_time: '响应时间',
    text_plan_date: '计划日期',
    text_warning_time: '警告时间',
    text_status: '状态',
    text_transferred: '转发',
    text_dispatch_time: '派发时间',
    text_duration: '持续时间',
    text_engineer: '工程师',
    text_email: '邮箱',
    text_phone_number: '手机号码',
    text_cc_engineer: '抄送工程师 {{value}}',
    text_extension_time: '延长时间',
    text_update_time: '更新时间',

    label_region: '区域',
    label_site: '站点',
    label_ttNo: '工单号',
    label_ttName: '工单名称',
    label_name: '名称',
    label_priority: '优先级',
    label_transferred: '转发',
    label_status: '状态',
    label_equipment: '设备',
    label_plan_date: '计划日期',
    label_cycle: '循环',
    label_every: '每',
    label_day: '天',
    label_event_description: '事件详情',
    label_engineer: '工程师',
    label_cc_engineer: '抄送工程师',

    placeholder_region: '选择区域',
    placeholder_site: '选择站点',
    placeholder_ttNo: '请输入工单号',
    placeholder_ttName: '选择工单名称',
    placeholder_name: '选择名称',
    placeholder_priority: '选择优先级',
    placeholder_transferred: '选择是否转发',
    placeholder_status: '选择状态',
    placeholder_equipment: '选择设备',
    placeholder_plan_date: '选择计划日期',
    placeholder_event_description: '请输入事件详情',
    placeholder_timeRange: '时间范围',
    placeholder_engineer: '选择工程师',
    placeholder_cc_engineer: '选择抄送工程师',
    placeholder_reason: '原因',

    button_add: '添加',
    button_back: '返回',
    button_dispatch: '派发',
    button_transfer: '转发',
    button_accept: '接受',
    button_reject: '拒绝',
    button_extend: '延时',
    button_complete: '完成',
    button_close: '关闭',
    button_cancel: '取消',
  },
  Site: {
    title_site_list: '站点列表',
    title_site_detail: '站点详情',

    text_total_sites: '站点总数',
    text_last_updated: '最近更新',
    text_site_schematic: '站点示意图',
    text_power: '功率',
    text_voltage: '电压',
    text_current: '电流',
    text_status: '状态',
    text_dc_system: 'DC 系统',
    text_battery: '电池',
    text_dc_load: 'DC 负载',
    text_load: '负载',
    text_generation: '产生电量',
    text_consumption: '消耗电量',
    text_frequency: '频率',
    text_phase_voltage: '{{value}} 电压',
    text_phase_current: '{{value}} 电流',

    text_phase_a: 'A相位',
    text_phase_b: 'B相位',
    text_phase_c: 'C相位',

    label_update_status: '更新状态',

    placeholder_search_bar: '搜索区域 / 省 / 站点',
    placeholder_all_asset_type: '全部资产类型',
    placeholder_search_alarm_name: '按告警名称搜索',
    placeholder_assets_type: '资产类型',

    option_by_region: '区域',
    option_by_province: '省',
    option_overview: '概览',
    option_device_list: '设备',
    option_alarms: '告警',
    option_ac_power: 'AC 功率',
    option_dc_power: 'DC 功率',
  },
  TroubleTicket: {
    title_alarm_trouble_ticket: '告警工单',
    title_filter: '过滤',
    title_add: '增加',
    title_add_ticket: '增加工单',
    title_open_trouble_ticket: '开放工单',
    title_closed_trouble_ticket: '关闭工单',

    toast_success_add_comment: '添加评论成功',
    toast_success_create_ticket: '创建工单成功',
    toast_success_accept_ticket: '接受工单成功',
    toast_success_reject_ticket: '拒绝工单成功',
    toast_success_complete_ticket: '已完成工单',
    toast_success_cancel_ticket: '已取消工单',
    toast_success_close_ticket: '已关闭工单',

    tab_open_trouble_ticket: '开放工单',
    tab_closed_trouble_ticket: '关闭工单',

    text_confirm_add_ticket_description: '确定添加告警工单?',
    text_confirm_accept_ticket_description: '确定接受告警工单?',
    text_confirm_complete_ticket_description: '确定完成此工单?',
    text_confirm_close_ticket_description: '确定关闭此工单?',

    text_accept: '接受',
    text_reject: '拒绝',
    text_complete: '完成',
    text_cancel: '取消',
    text_close: '关闭',

    text_ttName: '工单名称',
    text_ttNo: '工单号',
    text_equipment: '设备',
    text_assignedBy: '委託人',
    text_site_name: '站点名称',
    text_siteId: '站点 ID',
    text_priority: '优先级',
    text_generated_time: '创建时间',
    text_end_time: '结束时间',
    text_region: '区域',
    text_response_time: '响应时间',
    text_processing_duration: '处理时间',
    text_warning_time: '告警时间',
    text_status: '状态',
    text_transferred: '转发',
    text_dispatch_time: '派发时间',
    text_duration: '持续时间',
    text_engineer: '工程师',
    text_email: '邮箱',
    text_phone_number: '手机号',
    text_cc_engineer: '抄送工程师 {{value}}',
    text_extension_time: '延长时间',
    text_update_time: '更新时间',

    label_region: '区域',
    label_site: '站点',
    label_ttNo: '工单号',
    label_ttName: '工单名称',
    label_name: '名称',
    label_priority: '优先级',
    label_transferred: '转发',
    label_status: '状态',
    label_equipment: '设备',
    label_alarm_name: '告警名称',
    label_event_description: '事件详情',
    label_engineer: '工程师',
    label_cc_engineer: '抄送工程师',

    placeholder_region: '选择区域',
    placeholder_site: '选择站点',
    placeholder_ttNo: '请输入工单号',
    placeholder_ttName: '选择工单名称',
    placeholder_name: '选择名称',
    placeholder_priority: '选择优先级',
    placeholder_transferred: '选择是否转发',
    placeholder_status: '选择状态',
    placeholder_equipment: '选择设备',
    placeholder_alarm_name: '选择告警名称',
    placeholder_event_description: '请输入事件详情',
    placeholder_timeRange: '时间范围',
    placeholder_engineer: '选择工程师',
    placeholder_cc_engineer: '选择抄送工程师',
    placeholder_reason: '原因',

    button_add: '增加',
    button_back: '返回',
    button_dispatch: '派发',
    button_transfer: '转发',
    button_accept: '接受',
    button_reject: '拒绝',
    button_extend: '延时',
    button_complete: '完成',
    button_close: '关闭',
    button_cancel: '取消',
  },
  WorkOrder: {
    title_extend_work_order: '延时工单',
    title_work_order_detail: '工单详情',
    title_filter: '过滤',
    title_dispatch: '派发',
    title_extend: '延时',
    title_transfer: '转发',

    toast_success_transferred_ticket: '工单转发成功',
    toast_success_extended_ticket: '工单延时成功',
    toast_success_dispatch_ticket: '工单派发成功',
    toast_success_add_comment: '评论添加成功',
    toast_success_agree_extend_workOrder: '审批延时工单成功',

    tab_description: '详情',

    toast_success_reject_extend_workOrder: '已拒绝延时工单',
    text_confirm_agree_extension_workOrder_description: '确定同意延时此工单?',
    text_confirm_reject_extension_workOrder_description: '确定拒绝延时此工单?',
    text_open_ticket: '开放工单',
    text_generated_date: '创建时间',
    text_extension_result: '延时结果',
    text_top: '优',
    text_high: '高',
    text_medium: '中',
    text_low: '低',
    text_yes: '是',
    text_no: '否',
    text_agree: '同意',
    text_reject: '拒绝',
    text_open: '开放',
    text_dispatched: '派发',
    text_accepted: '接受',
    text_rejected: '拒绝',
    text_in_progress: '处理中',
    text_to_be_confirmed: '待确认',
    text_transferred: '转发',
    text_closed: '关闭',
    text_cancelled: '取消',
    text_to_be_approved: '待审批',
    text_approved: '审批',

    text_ttName: '工单名称',
    text_ttNo: '工单号',
    text_equipment: '设备',
    text_assignedBy: '委託人',
    text_site_name: '站点名称',
    text_siteId: '站点 ID',
    text_priority: '优先级',
    text_generated_time: '创建时间',
    text_end_time: '结束时间',
    text_region: '区域',
    text_response_time: '响应时间',
    text_processing_duration: '处理时间',
    text_warning_time: '告警时间',
    text_cycle: '循环',
    text_plan_date: '计划日期',
    text_status: '状态',
    text_dispatch_time: '派发时间',
    text_duration: '持续时间',
    text_engineer: '工程师',
    text_email: '邮箱',
    text_phone_number: '手机号',
    text_cc_engineer: '抄送工程师 {{value}}',
    text_username: '用户名',
    text_extension_time: '延长时间',
    text_update_time: '更新时间',

    label_region: '区域',
    label_site: '站点',
    label_ttNo: '工单号',
    label_name: '名称',
    label_priority: '优先级',
    label_transferred: '转发',
    label_status: '状态',
    label_equipment: '设备',
    label_alarm_name: '告警名称',
    label_event_description: '事件详情',
    label_engineer: '工程师',
    label_cc_engineer: '抄送工程师',
    label_extension_result: '延时结果',
    label_days: '天',
    label_hours: '时',
    label_reason: '原因',

    placeholder_region: '选择区域',
    placeholder_site: '选择站点',
    placeholder_ttNo: '请输入工单号',
    placeholder_name: '选择名称',
    placeholder_priority: '选择优先级',
    placeholder_transferred: '选择转发',
    placeholder_status: '选择状态',
    placeholder_equipment: '选择设备',
    placeholder_alarm_name: '选择告警名称',
    placeholder_event_description: '请输入事件详情',
    placeholder_timeRange: '时间范围',
    placeholder_extension_result: '选择延时结果',
    placeholder_engineer: '选择工程师',
    placeholder_cc_engineer: '选择抄送工程师',
    placeholder_reason: '原因',

    option_top: '优',
    option_high: '高',
    option_medium: '中',
    option_low: '低',
    option_yes: '是',
    option_no: '否',
    option_open: '开放',
    option_dispatched: '派发',
    option_accepted: '接受',
    option_rejected: '拒绝',
    option_in_progress: '处理中',
    option_to_be_confirmed: '待确认',
    option_transferred: '转发',
    option_closed: '关闭',
    option_cancelled: '取消',
    option_to_be_approved: '待审批',
    option_approved: '审批',

    button_extend_work_order: '延时工单',
    button_agree: '同意',
    button_reject: '拒绝',
    button_back: '返回',
  },
  Error: {
    internetError: '请检查网路',
    startDateLaterError: '开始日期应该早于结束日期',
    endDateEarlierError: '结束日期应该晚于开始日期',
    wrongPassword: '密码错误',
    notAllFieldsFilled: '请填写所有项',
    required: '必填项',
    minimum_length: '最小长度是 9 个字符',
    maximum_length: '最大长度是 20 个字符',
    passwords_must_match: '密码必须匹配',
    login_expired: '登录过期，请重新登录',
    unknown_server_error: '未知服务器错误',
    unexpected_server_error: '未知服务器错误，请联繫管理员!',
  },
  //equipment operation status text
  Status: {
    //red text
    stopped: '停止',
    float_charge: '浮充',
    no_connection: '断开连接',
    alarm: '告警',
    error: '错误',
    discharge: '放电',
    close: '关闭',
    //blue text
    ready: '准备',
    normal: '正常',
    running: '运行中',
    stand_by: '待运行',
    open: '开放',
  },
}

export default zh_cn