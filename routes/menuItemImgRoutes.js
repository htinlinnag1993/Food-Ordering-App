const mongoose = require('mongoose');
const MenuItemImg = mongoose.model('menu-item-imgs');

module.exports = (app) => {
    app.get('/api/foa/menu/menu-item/menu-item-img/:id', async (req, res) => {
        try {
            const menuItemImg =  await MenuItemImg.findById(req.params.id);
            res.status(200).send(menuItemImg);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

    app.post('/api/foa/menu/menu-item/menu-item-img', async (req, res) => {
        const { name, url } = req.body;
        const menuItemImg = new MenuItemImg({
            name,
            url,
            createdOn: Date.now(),
            lastUpdated: Date.now()
        });
        try{
            await menuItemImg.save();
            res.send(menuItemImg);
        } catch(err) {
            res.status(422).send(err);
        }
    });
};