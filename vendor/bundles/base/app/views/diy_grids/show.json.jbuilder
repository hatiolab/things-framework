json.(@diy_grid, :id,:domain_id,:name,:description,:category,:config,:fields,:columns,:created_at,:updated_at)

json.creator @diy_grid.creator, :id, :name if @diy_grid.creator
json.updater @diy_grid.updater, :id, :name if @diy_grid.updater