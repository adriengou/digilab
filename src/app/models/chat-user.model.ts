export class ChatUser {
  lastMessageDate!:Date | boolean
  isLoggedIn!:boolean

  constructor(
    firstName='',
    lastName='',
    avatar='',
    status='no status'
  ) {
    this.isLoggedIn = (Math.floor(Math.random()*10)) % 2 == 0
    this.lastMessageDate = false
  }
}
