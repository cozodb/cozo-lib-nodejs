const binary = require('@mapbox/node-pre-gyp');
const path = require('path');
const binding_path = binary.find(path.resolve(path.join(__dirname, './package.json')));
const native = require(binding_path);

class CozoDb {
    constructor(path) {
        this.db_id = native.open_db(path)
    }

    close() {
        native.close_db(this.db_id)
    }

    run(script, params) {
        return new Promise((resolve, reject) => {
            const params_str = JSON.stringify(params || {})
            native.query_db(this.db_id, script, params_str, (result_str) => {
                const result = JSON.parse(result_str);
                if (result.ok) {
                    resolve(result)
                } else {
                    reject(result)
                }
            })
        })
    }
}

module.exports = {CozoDb: CozoDb}
