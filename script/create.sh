cd ..
cd package
mkdir $1
cd $1
mkdir src
touch README.md
echo "#$1">README.md
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

cd ../../../test/unit/specs/
touch $1.spec.js

cd ../../../theme
touch $1.less

echo "@import 'common/var';">$1.less

echo "Create the component $1 successful"
