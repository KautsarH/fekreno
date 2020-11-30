import { Model } from '@vuex-orm/core'
import Application from './Application'
import User from './User'

export default class UserApplication extends Model {

  static entity = 'user-application'

  static primaryKey = ['userId', 'applicationId']

  static fields () {
    return {
      id: this.attr(''),
      userId: this.attr(''),
      applicationId: this.attr(''),
      status: this.attr(''),
      answers: this.attr(''),
      createdAt: this.attr(''),
      updatedAt: this.attr('')
    }

  }

  get getAnswersJsonObject() {
    return JSON.parse(this.answers)
  }
}
