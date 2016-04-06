#encoding: utf-8 

Dir[File.join(File.dirname(__FILE__), 'codes', '*.rb')].sort.each do |seed|
  puts "  Code : #{seed}"
  load seed
end

CommonCode.setup :BUNDLE, {:description => 'All Bundles'} do
  code 'core' => 'Core'
  code 'base' => 'Base'
  code 'sample' => 'Sample'
end

CommonCode.setup :LOCALE, {:description => 'Locale code'} do
  code 'en-US' => 'English'
  code 'ko-KR' => '한글'
  code 'zh-CN' => '中文'
end

CommonCode.setup :TERMS_CATEGORY, {:description => 'Terminology categories'} do
  code 'button' => 'Button'
  code 'label' => 'Label'
  code 'text' => 'Text'
  code 'error' => 'Error'
  code 'format' => 'Format'
  code 'menu' => 'Menu'
  code 'setting' => 'Setting'
  code 'title' => 'Title'
  code 'tooltip' => 'Tooltip'
end

CommonCode.setup :MENU_TYPE, {:description => 'Menu type'} do
  code :MENU => 'Menu'
  code :SCREEN => 'Screen'
  code :TEMPLATE => 'Template'
  code :SEPARATOR => 'SEPARATOR'
end

CommonCode.setup :ROUTING_TYPE, {:description => 'Menu Routing Type'} do
  code :STATIC => 'Static'
  code :RESOURCE => 'Dynamic Resource'
  code :DIY => 'Custom Resource'
end

CommonCode.setup :MENU_CATEGORY, {:description => 'STANDARD OR TERMINAL'} do
  code :STANDARD => 'STANDARD'
  code :TERMINAL => 'TERMINAL'
end

CommonCode.setup :SCRIPT_TYPE, {:description => 'Script type'} do
  code 'SQL' => 'Database Query'
  code 'DSL' => 'Business Logic'
  code 'DSL-SQL' => 'Query Made by Logic'
end

CommonCode.setup :ENTITY_REF_TYPE, {:description => 'Entity Reference Type'} do
  code :CommonCode => 'CommonCode'
  code :Entity => 'Entity'
end

CommonCode.setup :ENTITY_FIELD_TYPE, {:description => 'Entity Field Type'} do
  code 'string' => 'string',
  code 'text' => 'text',
  code 'integer' => 'integer',
  code 'float' => 'float',
  code 'decimal' => 'decimal',
  code 'date' => 'date',
  code 'datetime' => 'datetime',
  code 'timestamp' => 'timestamp',
  code 'time' => 'time',
  code 'boolean' => 'boolean',
  code 'binary' => 'binary',
  code 'long' => 'long',
  code 'double' => 'double'
end

CommonCode.setup :QUERY_OPERATOR, {:description => 'Query Operator'} do
  code :eq => 'equal'
  code :noteq => 'not equal'
  code :notin => 'not in'
  code :in => 'in'
  code :is_null => 'is null'
  code :is_not_null => 'is not null'
  code :is_false => 'is false'
  code :is_true => 'is true'
  code :is_not_false => 'is not false'
  code :is_not_true => 'is not true'  
  code :is_present => 'is present'
  code :is_blank => 'is blank'
  code :gt => 'greater than'
  code :gte => 'greater than equal'
  code :lt => 'less than'
  code :lte => 'less than equal'
  code :like => 'like'
  code :nlike => 'not like'
  code :contains => 'contains'
  code :sw => 'starts with'
  code :ew => 'ends with'
  code :dnsw => 'does not starts with'
  code :dnew => 'does not ends with'
end

CommonCode.setup :ALIGNMENT, {:description => 'Grid Column Alignment'} do
  code :far => 'Far'
  code :center => 'Center'
end

CommonCode.setup :LABEL_STATUS, {:description => 'Label Status'} do
  code :NEW => 'New'
  code :RELEASE => 'Released'
  code :EDIT => 'Editing'
end

CommonCode.setup :SCRIPT_ENGINE, {:description => 'Script Engine'} do
  code :JavaScript => 'JavaScript'
  code :groovy => 'Groovy'
  code :ruby => 'Ruby'
end

CommonCode.setup :ALARM_TYPE, {:description => 'Alarm Type'} do
  code :MAIL => 'E-Mail'
  code :WEBSOCKET => 'Websocket Push'
  code :MOBILE => 'Mobile Push'
  code :HTTP => 'Http Invocation'
end

CommonCode.setup :ALARM_CATEGORY, {:description => 'Alarm Category'} do
  code :TEST => 'Test'
  code :QUALITY => 'Quality'
  code :SYSTEM => 'System'
  code :MASTER => 'Master Data'
end

CommonCode.setup :STORAGE_CATEGORY, {:description => 'Storage Category'} do
  code :backup => 'Back Up'
  code :binary => 'Binary'
  code :document => 'Document'
  code :image => 'Image'
end

CommonCode.setup :UPLOAD_FOLDER_RULE, {:description => 'Upload Folder Rule'} do
  code :YEAR => 'Year (/YYYY)'
  code :MONTH => 'Month (/YYYY/MM)'
  code :DAY => 'Day (/YYYY/MM/DD)'
  code :RANDOM => 'Random (UUID)'
  code :CUSTOM => 'By User Input'
end

CommonCode.setup :VARIABLE_CATEGORY, {:description => 'Variable Category'} do
  code :SYSTEM => 'SYSTEM'
  code :SESSION => 'SESSION'
  code :ITEM => 'ITEM'
end

CommonCode.setup :INFOGRAPHIC_TYPE, {:description => 'Lable Type'} do
  code :type1 => 'type1'
  code :type2 => 'type2'
end

CommonCode.setup :PRINTER_TYPE, {:description => 'Printer Type'} do
  code :zebra => 'zebra'
  code :datamax => 'datamax'
  code :printronix => 'printronix'
end
