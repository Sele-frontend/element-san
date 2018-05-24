cd ..
cd package
mkdir $1
cd $1
mkdir src
touch $1.md
echo "#$1">$1.md
touch index.js
echo "import $1 from './src/$1.js';

      export default $1;">index.js
cd src
touch $1.js
echo "import {defineComponent} from 'san';
      export default defineComponent({

          template:'',
          initData() {
              return {
              }
          }

      })" >$1.js

