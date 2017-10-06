'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const appEvents = require('../scripts/app/events.js')
const getFormFields = require('../../lib/get-form-fields')

$(() => {
  $('#registration').on('submit', appEvents.registerUser)
  $('#login').on('submit', appEvents.loginUser)
  $('#log-out-btn').on('click', appEvents.logoutUser)
  $('#log-out-btn2').on('click', appEvents.logoutUser)
  $('#passChange').on('submit', appEvents.resetPassword)

  $('#create-listing').on('submit', appEvents.onCreateNewListing)

  // $('.showAllListings').on('click', appEvents.onGetUsersListings)

  $(document).on('click', ".deleteListing", appEvents.onDeleteListing)

  $(document).on('submit', "#updateListing", appEvents.updateListing)

  $(document).on('click', "#showListings", appEvents.onGetListings)
// onGetListings to show ALL listings
  //  $('#listingsShow').click(function (event) {
  //    event.preventDefault()
  //    alert('hishowCreateListingForm
  //    const myDiv = $('#listingsShow')
  //    myDiv.clearQueue()
  //    $(this).on('submit', appEvents.onGetListings)
  //    console.log('hit index.js')
  //    // console.log('this one')
  //    // appEvents.onCreateNewEvent()
  //  })

   $(document).on('click', "#message button", function () {
    $('.container-update').show()
    $('#updateListing').show()
    // $('#message').hide()
    // $('#eventsShow').hide()
    let update_id = $(this).attr('id')
    $('#eventId').val(update_id)
    // console.log(update_id)
  })

  $('#close-update').click(function () {
  $('.container-update').hide()
  $('#updateListing').hide()
})

$('#close-create').click(function () {
$('.createListing').hide()
})

$('#showCreateListingForm').click(function () {
$('.createListing').show()
$('#create-listing').show()
})

$('.changepass-button').click(function () {
  $('#chgpwModal').show()
})

$('.reg-cancel').click(function () {
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
})

$('.login-cancel').click(function () {
  $('#login').find('input:text').val('')
  $('#login').find('input:password').val('')
})

$('.change-cancel').click(function () {
  $('#passChange').find('input:text').val('')
  $('#passChange').find('input:password').val('')
})

$('.cancel').click(function () {
  $('.modal-footer-reg').show()
  $('#registration').show()
  $('#errorMessageModalSignUp').empty()
  $('#signUpSuccess').empty()
  $('#errorMessageModalSignUp').show()
  $('#signUpSuccess').show()
})

$('#myAccountButton').click(function () {
  $('#signInSuccess').empty()
  $('#errorMessageModalSignUp').empty()
  $('#signUpSuccess').empty()
  $('#errorMessageModalSignUp').empty()
  $('#changePassSuccess').empty()
  $('#changePassFail').empty()
})

$(document).ready(function () {
 // console.log( "ready!" )
 appEvents.onGetUsersListings()
 // create listing form
 $('.createListing').hide()
 // show all listings button
 $('.showAllListings').hide()
 // update form
 $('.update').hide()
 // my listings button and form
 $('.my-listings').hide()
 // my listings print to message
 $('#message').hide()
 $('.myAccountSettings').hide()
 $('.container-update').hide()
 $('#updateListing').hide()
 $('#myAccountButton').hide()
 $('#myAccountButton2').hide()
 $('.cancel').hide()
})

})
