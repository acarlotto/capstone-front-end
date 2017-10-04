'use strict'

const app = require('../app.js')
// const appEvents = require('./events.js')

// on sign up success -- this is the most recent
const onSignupSuccess = function () {
  console.log('success')
  }

const onSignupFailure = () => {
  console.log('There was problem signing up, please try again!')
}

const onSigninSuccess = function(data) {
  console.log(data.user)
  app.user = data.user
  $('.allListings').hide()
  $('#showAllListings').hide()
  // update form
  $('.update').hide()
  // create listing form
  $('.createListing').hide()
  $('#allListings').hide()
  $('.myAccountSettings').show()
  // my listings button and form
  $('.my-listings').show()
  // my listings print to message
  $('#message').show()
  console.log('sign in successful')
}

const onSigninFailure = (error) => {
console.log('Invalid username or password.')
  }

const onLogoutSuccess = function(app) {
  console.log('sign-out successful')
}

const onLogoutFailure = function() {
  console.log('error signing out')
}

const onResetSuccess = function () {
  console.log('password reset successful')
  }

const onResetFailure = function() {
  console.log('password reset failed')
  }


  // CREATE New Listing
  const newSuccess = function () {
    console.log('success')
      }

  const newFail = function () {
    console.log('fail')
  }

// VIEW MY LISTINGS BUTTON
  const onSuccessGetListing = function (data) {
  $('#message').empty()
  const listings = data.listings
  const my_id = data.listings.id
  listings.forEach (function (listing) {
    console.log(listing.name)
    // console.log(event.id)
    // console.log(data.events.id)
    // '<h2>' + listing.name + '</h2><div class="card"><img src=' + listing.imagelink + ' width="200px"><p class="card-text"> ' + listing.description + '</p><p> $' + listing.price + '0</p><p> ' + listing.paypalcode + '</p></div><div class="row" style="text-align: center; color: black">'
    $('#message').append('<div class="col-6 col-lg-6"><img src=' + listing.imagelink + ' width="200px"><br><h5> ' + listing.name + ' <br><br></p><a href="javascript:" id="' + listing.id + '" class="deleteListing">delete</a> <button type="Submit" id="' + listing.id + '" class="btn btn-primary edit">edit</button></h5></p><p hidden id="my_id"> ' + listing.id + ' </p></div>')
  })
}

const onFailureGetListing = function (data) {
  console.error('error')
}

const onSuccessGetAllListings = function (data) {
  const listings = data.listings
  console.log('got all listings')

  listings.forEach (function (listing) {
    $('#allListings').append('<div class="card"><img src=' + listing.imagelink + ' width="100%"><p class="card-text"> ' + listing.description + '</p><p> $' + listing.price + '0</p><p> ' + listing.paypalcode + '</p></div>')

    })

}

const onFailGetAllListings = function () {
  console.log('failed to get all listings')
}

const deleteSuccess = function () {
  $('#showChanges').empty()
  console.log('delete success')
  $('#showChanges').prepend('<div class="row" style="text-align: center; color: #f56c4b"> <p> ' + '<b>ITEM DELETED!<b> <br> Click <i>view list</i> to see your changes!' + ' </p></div>')
//  $('#message').empty()
//  onSuccessGetEvent()
}

const deleteFail = function (error) {
  // console.log('delete fail')
  console.error('error')
}

const onUpdateSuccess = function () {
  // $('#showChanges').prepend('<div class="row" style="text-align: center; color: #f56c4b"> <p> ' + '<b>Todo Item Updated!<b> <br> Click <i>view list</i> to see your changes!' + ' </p></div>')
  // $('#eventsShow').trigger()
  console.log('success update')
}

const onUpdateFail = function () {
  console.log('fail update')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onResetSuccess,
  onResetFailure,
  newSuccess,
  newFail,
  onSuccessGetListing,
  onFailureGetListing,
  onSuccessGetAllListings,
  onFailGetAllListings,
  onUpdateSuccess,
  onUpdateFail
}
