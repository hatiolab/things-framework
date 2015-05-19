# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150304051357) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attachments", force: true do |t|
    t.integer  "domain_id",                null: false
    t.string   "name",        limit: 64,   null: false
    t.string   "description"
    t.string   "mimetype",    limit: 10
    t.integer  "file_size"
    t.string   "path",        limit: 2000
    t.integer  "on_id"
    t.string   "on_type"
    t.string   "tag",         limit: 2000
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "attachments", ["domain_id", "on_type", "on_id", "tag", "name"], name: "ix_attach_0", unique: true, using: :btree

  create_table "calendar_dates", force: true do |t|
    t.integer  "domain_id",                             null: false
    t.integer  "calendar_id",                           null: false
    t.string   "description"
    t.date     "sys_date",                              null: false
    t.integer  "julian_day"
    t.integer  "plan_year"
    t.integer  "plan_quarter"
    t.integer  "plan_month"
    t.integer  "plan_week"
    t.integer  "iso_year"
    t.integer  "start_time"
    t.decimal  "work_hours",   precision: 15, scale: 3
    t.datetime "shift1_start"
    t.datetime "shift1_end"
    t.datetime "shift2_start"
    t.datetime "shift2_end"
    t.datetime "shift3_start"
    t.datetime "shift3_end"
    t.datetime "shift4_start"
    t.datetime "shift4_end"
    t.integer  "week_day"
    t.boolean  "dayoff_flag"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "calendar_dates", ["calendar_id", "plan_year", "plan_month"], name: "ix_calendar_date_1", using: :btree
  add_index "calendar_dates", ["calendar_id", "sys_date"], name: "ix_calendar_date_0", unique: true, using: :btree

  create_table "calendars", force: true do |t|
    t.integer  "domain_id",                null: false
    t.string   "name",          limit: 64, null: false
    t.string   "description"
    t.boolean  "day1_off_flag"
    t.boolean  "day2_off_flag"
    t.boolean  "day3_off_flag"
    t.boolean  "day4_off_flag"
    t.boolean  "day5_off_flag"
    t.boolean  "day6_off_flag"
    t.boolean  "day7_off_flag"
    t.float    "day1_workhour"
    t.float    "day2_workhour"
    t.float    "day3_workhour"
    t.float    "day4_workhour"
    t.float    "day5_workhour"
    t.float    "day6_workhour"
    t.float    "day7_workhour"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "calendars", ["domain_id", "name"], name: "ix_calendar_0", unique: true, using: :btree

  create_table "chits", force: true do |t|
    t.integer  "domain_id",              null: false
    t.integer  "entity_id"
    t.string   "name",        limit: 64, null: false
    t.string   "description",            null: false
    t.text     "template"
    t.text     "logic"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "chits", ["domain_id", "entity_id", "name"], name: "ix_chits_0", unique: true, using: :btree

  create_table "code_expansions", force: true do |t|
    t.integer  "domain_id",         null: false
    t.integer  "expansion_code_id"
    t.string   "data_1",            null: false
    t.string   "data_2"
    t.string   "data_3"
    t.string   "data_4"
    t.string   "data_5"
    t.string   "data_6"
    t.string   "data_7"
    t.string   "data_8"
    t.string   "data_9"
    t.string   "data_10"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "code_expansions", ["domain_id", "expansion_code_id"], name: "ix_code_exp_0", using: :btree

  create_table "common_codes", force: true do |t|
    t.integer  "domain_id",              null: false
    t.string   "name",        limit: 64, null: false
    t.string   "description"
    t.integer  "parent_id"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "common_codes", ["domain_id", "parent_id", "name"], name: "ix_common_cd_0", unique: true, using: :btree
  add_index "common_codes", ["domain_id", "parent_id"], name: "ix_common_cd_1", using: :btree

  create_table "contacts", force: true do |t|
    t.integer  "domain_id",    null: false
    t.string   "name",         null: false
    t.string   "description"
    t.string   "family_name"
    t.string   "given_name"
    t.string   "alias"
    t.string   "company"
    t.string   "department"
    t.string   "title"
    t.string   "email"
    t.string   "phone_office"
    t.string   "phone_mobile"
    t.string   "fax"
    t.string   "address"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "contacts", ["domain_id", "name"], name: "ix_contacts_0", using: :btree

  create_table "diy_reports", force: true do |t|
    t.integer  "domain_id",                   null: false
    t.string   "name",             limit: 64, null: false
    t.string   "description"
    t.integer  "diy_selection_id"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "diy_reports", ["diy_selection_id"], name: "ix_diy_report_1", using: :btree
  add_index "diy_reports", ["domain_id", "name"], name: "ix_diy_report_0", using: :btree

  create_table "diy_selections", force: true do |t|
    t.integer  "domain_id",                null: false
    t.string   "name",          limit: 64, null: false
    t.string   "description"
    t.string   "script_type",   limit: 10
    t.text     "service_logic"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "diy_selections", ["domain_id", "name"], name: "ix_diy_sel_0", unique: true, using: :btree

  create_table "diy_services", force: true do |t|
    t.integer  "domain_id",                null: false
    t.string   "name",          limit: 64, null: false
    t.string   "description"
    t.string   "script_type",   limit: 10
    t.boolean  "active_flag"
    t.text     "service_logic"
    t.boolean  "atomic_flag"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "diy_services", ["domain_id", "name"], name: "ix_diy_svc_0", unique: true, using: :btree

  create_table "domains", force: true do |t|
    t.string   "name",          limit: 32, null: false
    t.string   "description"
    t.string   "timezone"
    t.boolean  "system_flag"
    t.string   "subdomain",     limit: 32
    t.string   "brand_name",    limit: 64
    t.string   "brand_image"
    t.string   "content_image"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "entities", force: true do |t|
    t.integer  "domain_id",                      null: false
    t.string   "name",                limit: 64, null: false
    t.string   "description"
    t.string   "bundle",              limit: 64, null: false
    t.integer  "list_infographic_id"
    t.integer  "item_infographic_id"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "entities", ["domain_id", "name"], name: "ix_entity_0", unique: true, using: :btree

  create_table "entity_columns", force: true do |t|
    t.integer "entity_id",                              null: false
    t.string  "name",        limit: 32,                 null: false
    t.string  "description"
    t.string  "term",        limit: 128
    t.string  "col_type",    limit: 20,                 null: false
    t.integer "col_size"
    t.boolean "nullable",                default: true
    t.string  "def_val"
    t.integer "uniq_rank",               default: 0
    t.string  "ref_type",    limit: 20
    t.string  "ref_name",    limit: 64
    t.integer "list_rank",               default: 0
    t.integer "disp_rank",               default: 0
  end

  add_index "entity_columns", ["entity_id"], name: "ix_entity_column_0", using: :btree

  create_table "entity_logics", force: true do |t|
    t.integer  "entity_id",              null: false
    t.string   "name",        limit: 64, null: false
    t.string   "description"
    t.string   "level",       limit: 10
    t.text     "logic"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "entity_logics", ["entity_id", "name"], name: "ix_entity_logic_0", using: :btree

  create_table "entity_properties", force: true do |t|
    t.integer "entity_id",                                 null: false
    t.string  "name",           limit: 64,                 null: false
    t.string  "description"
    t.string  "attribute_type", limit: 20,                 null: false
    t.string  "ref_type",       limit: 20
    t.string  "ref_name",       limit: 64
    t.boolean "editable",                  default: false
    t.integer "disp_rank",                 default: 0
  end

  add_index "entity_properties", ["entity_id"], name: "ix_entity_prop_0", using: :btree

  create_table "error_logs", force: true do |t|
    t.integer  "domain_id",                null: false
    t.date     "issue_date",               null: false
    t.string   "status",      limit: 16
    t.string   "error_type",  limit: 128
    t.string   "uri",         limit: 1000
    t.text     "message"
    t.text     "params"
    t.text     "stack_trace"
    t.integer  "creator_id"
    t.datetime "created_at"
  end

  add_index "error_logs", ["domain_id", "created_at"], name: "ix_error_log_1", using: :btree
  add_index "error_logs", ["domain_id", "issue_date"], name: "ix_error_log_0", using: :btree

  create_table "expansion_code_items", force: true do |t|
    t.integer "expansion_code_id"
    t.string  "name",              limit: 64, null: false
    t.string  "description",                  null: false
    t.integer "bind_index",                   null: false
    t.boolean "unique_flag"
    t.string  "ref_type",          limit: 20
    t.string  "ref_name",          limit: 64
    t.string  "col_type",          limit: 20, null: false
    t.integer "col_size"
    t.boolean "nullable"
  end

  add_index "expansion_code_items", ["expansion_code_id", "name"], name: "ix_expansion_code_items_0", unique: true, using: :btree

  create_table "expansion_codes", force: true do |t|
    t.integer  "domain_id",              null: false
    t.string   "name",        limit: 64, null: false
    t.string   "description"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "expansion_codes", ["domain_id", "name"], name: "ix_expansion_codes_0", unique: true, using: :btree

  create_table "global_configs", force: true do |t|
    t.integer  "domain_id",               null: false
    t.string   "name",       limit: 64,   null: false
    t.string   "value",      limit: 2000
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "creator_id"
    t.integer  "updater_id"
  end

  create_table "infographics", force: true do |t|
    t.integer  "domain_id",        null: false
    t.string   "name",             null: false
    t.string   "description"
    t.string   "infographic_type"
    t.string   "printer_type"
    t.text     "diagram"
    t.text     "print_command"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "infographics", ["domain_id", "name"], name: "ix_infographics_0", unique: true, using: :btree

  create_table "menu_params", force: true do |t|
    t.integer "menu_id"
    t.string  "name",        limit: 32,   null: false
    t.string  "description",              null: false
    t.string  "value",       limit: 4000, null: false
  end

  add_index "menu_params", ["menu_id", "name"], name: "ix_menu_params_0", unique: true, using: :btree

  create_table "menus", force: true do |t|
    t.integer  "domain_id",                               null: false
    t.string   "name",        limit: 64,                  null: false
    t.string   "description"
    t.integer  "parent_id"
    t.string   "template",    limit: 128
    t.string   "menu_type",   limit: 20
    t.string   "category",    limit: 64
    t.integer  "rank",                    default: 100
    t.string   "icon_path"
    t.boolean  "hidden_flag",             default: false
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "menus", ["domain_id", "menu_type"], name: "ix_menu_2", using: :btree
  add_index "menus", ["domain_id", "parent_id", "name"], name: "ix_menu_0", unique: true, using: :btree
  add_index "menus", ["parent_id"], name: "ix_menu_1", using: :btree

  create_table "permissions", force: true do |t|
    t.integer  "role_id",                  null: false
    t.integer  "resource_id"
    t.string   "resource_type"
    t.string   "action_name",   limit: 64
    t.string   "method_name",   limit: 64
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "permissions", ["resource_type", "resource_id", "role_id"], name: "ix_pmss_1", using: :btree
  add_index "permissions", ["role_id", "resource_type", "resource_id"], name: "ix_pmss_0", using: :btree

  create_table "properties", force: true do |t|
    t.integer  "domain_id",              null: false
    t.string   "name",        limit: 64, null: false
    t.string   "description"
    t.string   "value"
    t.integer  "on_id"
    t.string   "on_type"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "properties", ["domain_id", "on_type", "on_id", "name"], name: "ix_property_0", unique: true, using: :btree

  create_table "rem_traces", force: true do |t|
    t.integer  "domain_id",               null: false
    t.string   "name",        limit: 128
    t.integer  "entity_id"
    t.string   "entity_type"
    t.text     "content"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rem_traces", ["domain_id", "entity_type"], name: "ix_rem_trace_0", using: :btree
  add_index "rem_traces", ["domain_id", "updated_at"], name: "ix_rem_trace_1", using: :btree

  create_table "report_params", force: true do |t|
    t.integer "report_id",                          null: false
    t.string  "name",        limit: 64,             null: false
    t.string  "description"
    t.string  "input_type",  limit: 20,             null: false
    t.string  "ref_type",    limit: 20
    t.string  "ref_name",    limit: 64
    t.integer "rank",                   default: 0
  end

  add_index "report_params", ["report_id"], name: "ix_report_param_0", using: :btree

  create_table "reports", force: true do |t|
    t.integer  "domain_id",   null: false
    t.string   "name",        null: false
    t.string   "description"
    t.string   "template"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reports", ["domain_id", "name"], name: "ix_reports_0", using: :btree

  create_table "roles", force: true do |t|
    t.integer  "domain_id",              null: false
    t.string   "name",        limit: 64, null: false
    t.string   "description"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "roles", ["domain_id", "name"], name: "ix_role_0", unique: true, using: :btree

  create_table "service_in_params", force: true do |t|
    t.integer "resource_id"
    t.string  "resource_type"
    t.string  "name",          limit: 64
    t.string  "description"
    t.integer "rank"
  end

  add_index "service_in_params", ["resource_type", "resource_id"], name: "ix_svc_in_param_0", using: :btree

  create_table "service_out_params", force: true do |t|
    t.integer "resource_id"
    t.string  "resource_type"
    t.string  "name",          limit: 64
    t.string  "description"
    t.integer "rank"
  end

  add_index "service_out_params", ["resource_type", "resource_id"], name: "ix_svc_out_param_0", using: :btree

  create_table "shifts", force: true do |t|
    t.integer "domain_id",                               null: false
    t.string  "name",             limit: 32
    t.boolean "default_flag"
    t.integer "total_shift",      limit: 2
    t.string  "shift1_start",     limit: 8
    t.string  "shift2_start",     limit: 8
    t.string  "shift3_start",     limit: 8
    t.string  "shift1_end",       limit: 8
    t.string  "shift2_end",       limit: 8
    t.string  "shift3_end",       limit: 8
    t.integer "shift1_start_add", limit: 2,  default: 0
    t.integer "shift1_end_add",   limit: 2,  default: 0
    t.integer "shift2_start_add", limit: 2,  default: 0
    t.integer "shift2_end_add",   limit: 2,  default: 0
    t.integer "shift3_start_add", limit: 2,  default: 0
    t.integer "shift3_end_add",   limit: 2,  default: 0
  end

  add_index "shifts", ["domain_id", "name"], name: "ix_shift_0", unique: true, using: :btree

  create_table "terminologies", force: true do |t|
    t.integer  "domain_id",                  null: false
    t.string   "name",                       null: false
    t.string   "description",   limit: 4000
    t.string   "locale",        limit: 15
    t.string   "category",      limit: 20
    t.string   "display",       limit: 1000
    t.string   "display_short"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "terminologies", ["domain_id", "locale", "category", "name"], name: "ix_terminologies_0", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.string   "login",                                          null: false
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",                             default: "", null: false
    t.string   "encrypted_password",                default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                     default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "name",                   limit: 64
    t.string   "locale",                 limit: 10
    t.string   "timezone",               limit: 64
    t.boolean  "admin_flag"
    t.boolean  "operator_flag"
    t.boolean  "active_flag"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "users_roles", id: false, force: true do |t|
    t.integer "user_id", null: false
    t.integer "role_id", null: false
  end

  add_index "users_roles", ["role_id", "user_id"], name: "ix_user_role_1", using: :btree
  add_index "users_roles", ["user_id", "role_id"], name: "ix_user_role_0", unique: true, using: :btree

  create_table "variables", force: true do |t|
    t.integer  "domain_id",   null: false
    t.string   "name",        null: false
    t.string   "description"
    t.string   "category"
    t.text     "logic"
    t.integer  "creator_id"
    t.integer  "updater_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "variables", ["domain_id", "name"], name: "ix_variables_0", unique: true, using: :btree

end
