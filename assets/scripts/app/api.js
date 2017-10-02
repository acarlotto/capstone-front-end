const app = require('./../app.js')

const addUser = function(data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    // headers: { 'header': 'Content-Type: application/json' },
    method: 'POST',
    data
  })
}

const userLogin = function(data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    // headers: {
    // Authorization: 'Token token=' + app.user.token // store.user.token
    // },
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const userLogout = function(id) {
  // console.log('api file')
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const passwordReset = function(data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}

const newListing = function(data) {
  return $.ajax({
    url: app.host + '/listings',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    data: {
    "listing": {
      "user_id": app.user.id,
      "name": data.listing.name,
      "description": data.listing.description,
      "price": data.listing.price
      }
    }
  })
}

// show user listings
const showListings = function (id) {
  console.log("showing all listings")
  return $.ajax({
    url: app.host + '/listings/' + app.user.id,
    method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token
      }
    })
  }

// get all listings
const findAllListings = function () {
  console.log('get all api')
  return $.ajax({
    url: app.host + '/listings/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteListing = function(deleteId) {
  return $.ajax({
    url: app.host + '/listings/' + deleteId,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

// add patch
const updateListing = function (data, update_id) {
  // let index = event.target.id
  // console.log(app.user.token)
  return $.ajax({
    url: app.host + '/listings/' + update_id, // was just id and then app.game.id (didn't work)
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token // store.user.token
    },
    data: {
      "listing": {
        "user_id": app.user.id,
        "name": data.listing.name,
        "description": data.listing.description,
        "price": data.listing.price
        }
    }
  })
}

module.exports = {
  addUser,
  userLogin,
  passwordReset,
  userLogout,
  newListing,
  showListings,
  findAllListings,
  deleteListing,
  updateListing
}
