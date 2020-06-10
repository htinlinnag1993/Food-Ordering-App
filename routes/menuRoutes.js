const mongoose = require('mongoose');
const Menu = mongoose.model('menus');

module.exports = (app) => {
    app.get('/api/foa/menu/:id', async (req, res) => {
        try {
            const menu = await Menu.findById(req.params.id)
                            .populate({
                                path: 'menuItems',
                                populate: {
                                    path: '_menuItemImg',
                                    model: 'menu-item-imgs',
                                }
                            });
            res.status(200).send(menu);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

    app.post('/api/foa/menu', async (req, res) => {
        const { name, menuItems } = req.body;
        const menu = new Menu({
            name,
            menuItems: menuItems.map((menuItem) => 
                menuItem
            ),
            createdOn: Date.now(),
            lastUpdated: Date.now()
        });
        try{
            await menu.save();
            res.send(menu);
        } catch(err) {
            res.status(422).send(err);
        }
    });
};