const mongoose = require('mongoose');
const MenuItem = mongoose.model('menu-items');

module.exports = (app) => {
    app.get('/api/foa/menu/menu-item/:id', async (req, res) => {
        try {
            const menuItem =  await MenuItem.findById(req.params.id);
            res.status(200).send(menuItem);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

    app.post('/api/foa/menu/menu-item', async (req, res) => {
        const { name, description, categoryInMenu, imgId, price } = req.body;
        const menuItem = new MenuItem({
            name,
            description,
            categoryInMenu,
            _menuItemImg: imgId,
            price,
            createdOn: Date.now(),
            lastUpdated: Date.now()
        });
        try{
            await menuItem.save();
            res.send(menuItem);
        } catch(err) {
            res.status(422).send(err);
        }
    });
};