const _ = require('lodash');

class CompanyController {

  async create(request, response) {
    
    try {
      const {  } = request.body;
      response.status(200).send();
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  // async read(request, response) {
  // }

  // async update(request, response) {
  //   const { id } = request.params;
  //   const { name } = request.body;

  //   const categoryExists = await CategoriesRepository.findById(id);

  //   if (!categoryExists) {
  //     return response.status(404).json({ error: 'Category not found' });
  //   }

  //   if (!name) {
  //     return response.status(404).json({ error: 'Name is required' });
  //   }

  //   const categoryByName = await CategoriesRepository.findByName(name);

  //   if (categoryByName && categoryByName.id !== id) {
  //     return response.status(400).json({ error: 'This name is already in use' });
  //   }

  //   const category = await CategoriesRepository.update(id, name);

  //   return response.status(200).json(category);
  // }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await CategoriesRepository.delete(id);

  //   return response.sendStatus(204);
  // }
}

module.exports = new CompanyController();