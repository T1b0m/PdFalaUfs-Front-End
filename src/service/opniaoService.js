import ApiService from './apiService'

export default class opniaoService extends ApiService{

    constructor(){
        super('/api/opnioes')
    }

    consultar(){
        let params = `/api/opnioes`
        return this.get(params);
    }
}