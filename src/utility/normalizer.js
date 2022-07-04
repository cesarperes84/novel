function normalizer (value) {
    value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}	

export default normalizer;
