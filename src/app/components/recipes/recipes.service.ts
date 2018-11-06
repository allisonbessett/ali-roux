import { Recipe } from './recipes';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService {

  private recipe: Recipe[] = [
      {id: 1, name: 'Beet Muffins', src:
      'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/recipes/beet-muffin-cover.jpg',
      photo: [
        'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/recipes/beet-muffin-cover.jpg',
  ],
  servings: ['Servings: 12 muffins'],
      intro: [
        'Beets are my favorite vegetable. They offer such a unique and wonderful flavor to these muffins.',
      'These don’t have any refined sugar and they’re vegan if using an egg replacer!',
      'They’re sweetened with maple syrup, mashed banana, and orange juice.',
      'The fruits give the muffins a rich and full flavor.',
      'After these little beauties have softened, you can chop them in a food processor if you’d rather not hand mash them.',
    ],
    ingredients: ['INGREDIENTS',
    '2 cups sifted all purpose flour',
    '2 teaspoons baking powder',
    '¼ teaspoon salt',
    '1 cup boiled and pureed beets ',
    '½ cup orange juice',
    '¼ cup mashed banana',
    '¼ cup maple syrup (or honey)',
    '¼ cup canola or coconut oil (melted)',
    '1 large beaten egg (or egg replacer)',
  ],
  method: [
  '1. Cut beets into quarters and place in a pot of boiling water and cook until fork tender.',
  '2. Drain and let cool in colander. Place on a plate, cut off the skin, chop into small pieces, and measure out 1 cup.',
  '3. Preheat oven to 400 degrees F / 200 degrees C. Line a cupcake tin with 12 liners or spray with cooking spray.',
  '4. While the beets boil, measure out the dry ingredients. In a large bowl, combine the flour, baking powder, and salt. Stir thoroughly.',
  '5. In a medium sized bowl, add orange juice, mashed banana, maple syrup, and oil. Mix until smooth and add the beaten egg.',
  '6. Stir again and add wet ingredients to dry ingredients. Stir until just combined and mix in beets.',
  '7. Evenly divide batter between the muffin liners and place in the oven.',
  '8. Bake for 20-25 minutes until a toothpick inserted into the middle of a muffin comes out clean.',
  '9. Immediately remove muffins from muffin tin and place on a coolingrack. Enjoy!']
    },
    {
      id: 2, name: 'Cacao Scones',
      src: 'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/recipes/cacao-scone-cover.jpg',
      photo: ['https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/recipes/cacao-scone.jpg'
    ],
    servings: ['Servings: 8 squares'],
    ingredients: ['INGREDIENTS',
    '-Scones-',
    '1 ½ cups all purpose flour',
    '¼ cup cacao powder',
    '1 ½ teaspoons baking powder',
    '¼ teaspoon salt',
    '½ cup buttermilk',
    '2 tablespoons butter',
    '¼ cup honey',
    '¼ cup chocolate chunks',
    '-Chocolate Drizzle-',
    '¼ cup of heavy cream',
    '¼ cup of chopped dark chocolate',
  ],
  method: ['1. Heat oven to 425 and line a baking sheet with parchment paper or reusable mat.',
  '2. In a large bowl, mix the flour, cacao, baking powder, and salt.',
  '3. Cut butter with a pastry cutter or fork.',
  '4. Stir in buttermilk and honey. Then fold in the chocolate.',
  '5. Shape the dough into a cicle 3/4 inches tall and brush the top with milk.',
  '6. Cut into 8 equal triangles and bake at 425 for 17-19 minutes. Cool on a wire rack.',
  '7. To prepare the chcolate drizzle, heat the chocolate in the microwave until it starts to melt.',
  '8. Stir chcolate until smooth and add the heavy cream. Stir until consistent throughout.',
  '9. Drizzle chocolate on top of cooled scones.'
]
    },
    {
      id: 3, name: 'Orange Yogurt',
      src: 'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/recipes/yogurt-cover.jpg',
      photo: ['https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/recipes/yogurt.jpg'],
      servings: ['Servings: 1 bowl'],
      ingredients: ['INGREDIENTS',
      '½ cup of Greek yogurt',
      '1 tablespoon of orange juice',
      '¼  teaspoon of pure vanilla extract',
      '1 teaspoon of coconut ',
      '1 cup of fruit (banana, berries, peaches, apple, etc. ) ',
    ],
    method: ['1. Mix yogurt, orange juice, and vanilla.',
    '2. Top with coconut and fruit. I added sea buckthorn berries, lingonberries, and banana to my yogurt.'
  ]

    }
  ];

  constructor() {
  }

  getRecipes() {
    console.log('service 1');
    return this.recipe;
  }

  getRecipeByID(id) {
    return this.recipe.find(recipe => recipe.id === Number(id));
  }
}
