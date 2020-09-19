var app = new Vue({
  el: '#userProfile',
  data: {
    userName:' ',
    userDOB:'',
    userAge:'',
    userEmail:'',
    userCountry:'',
    userImgLrg:'',
    userImgThb:'',
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser: function() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          var userData = data.results[0];
          console.log(userData);
          this.userName = userData.name.first + " " + userData.name.last;
          this.userDOB = userData.dob[0];
          this.userAge = userData.dob[1];
          this.userEmail = userData.email;
          this.userCountry = userData.location.country;
          this.userImgLrg = userData.picture.large;
          this.userImgThb = userData.picture.thumbnail;
        });
      }
    }
  })
