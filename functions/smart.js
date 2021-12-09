/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
class Smart {
  constructor(arrayOfFood, arrayOfCriteria) {
    this.food = arrayOfFood;
    this.criteria = arrayOfCriteria;

    this._criteriaWeightNormalization();
    this._calculateUtility();
    this._calculateFinalValue();
    this._rank();
  }

  _criteriaWeightNormalization() {
    const totalWeight = this.criteria.reduce(
      (total, criteria) => total + criteria.bobot,
      0,
    );

    this.criteria = this.criteria.map((criteria) => {
      criteria.normalizedWeight = criteria.bobot / totalWeight;
      return criteria;
    });
  }

  _calculateUtility() {
    const maxValue = this._attributeMax();
    const minValue = this._attributeMin();

    this.food.forEach((food) => {
      food.utility = {};

      this.criteria.forEach((criteria) => {
        let result;
        if (criteria.jenisData === 'benefit') {
          result = (food.kandungan[criteria.nama] - minValue[criteria.nama]) / (maxValue[criteria.nama] - minValue[criteria.nama]);
        }

        if (criteria.jenisData === 'cost') {
          result = (maxValue[criteria.nama] - food.kandungan[criteria.nama]) / (maxValue[criteria.nama] - minValue[criteria.nama]);
        }

        food.utility[criteria.nama] = parseFloat(result.toFixed(2));
      });
    });
  }

  _calculateFinalValue() {
    this.food.forEach((food) => {
      food.nilaiAkhir = 0;

      this.criteria.forEach((criteria) => {
        food.nilaiAkhir += food.utility[criteria.nama] * criteria.normalizedWeight;
      });

      food.nilaiAkhir = parseFloat(food.nilaiAkhir.toFixed(2));
    });
  }

  _rank() {
    this.food.sort((a, b) => (
      b.nilaiAkhir - a.nilaiAkhir
    ));
  }

  _attributeMax() {
    const attributeMax = {
      kalori: 0,
      lemak: 0,
      protein: 0,
      karbohidrat: 0,
    };

    for (let i = 0; i < this.food.length; i += 1) {
      for (let j = 0; j < this.criteria.length; j += 1) {
        attributeMax[this.criteria[j].nama] = Math.max(attributeMax[this.criteria[j].nama], this.food[i].kandungan[this.criteria[j].nama]);
      }
    }

    return attributeMax;
  }

  _attributeMin() {
    const attributeMin = {
      kalori: this.food[0].kandungan.kalori,
      lemak: this.food[0].kandungan.lemak,
      protein: this.food[0].kandungan.protein,
      karbohidrat: this.food[0].kandungan.karbohidrat,
    };

    for (let i = 1; i < this.food.length; i += 1) {
      for (let j = 0; j < this.criteria.length; j += 1) {
        attributeMin[this.criteria[j].nama] = Math.min(attributeMin[this.criteria[j].nama], this.food[i].kandungan[this.criteria[j].nama]);
      }
    }

    return attributeMin;
  }
}

module.exports = Smart;
