angular
  .module('bookslpz', ["firebase"])
  .controller('bookslpzController', function ($scope, $firebaseArray, $firebaseAuth) {
    var s = this;


    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    $scope.books = $firebaseArray(ref);
    $scope.showAdd = false;
    $scope.showEdit = false;
    $scope.editBtn = false;
    $scope.isAuth = false;
    $scope.wrongPassword = false;
    $scope.bookId = 0;
    $scope.signFormClass = '';

    $scope.signIn = function () {
      $scope.firebaseUser = null;
      $scope.error = null;
      var email = $scope.email;
      var password = $scope.password;
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (firebaseUser) {
        $scope.firebaseUser = firebaseUser;
        $scope.isAuth = true;
        $scope.$apply();
        $scope.signFormClass = 'has-success';
        $scope.wrongPassword = false;
      }).catch(function (error) {
        $scope.signFormClass = 'has-error';
        $scope.error = error;
        $scope.wrongPassword = true;

      });
    };

    $scope.signOut = function () {
      firebase.auth().signOut().then(function () {
        $scope.firebaseUser = null;
        $scope.isAuth = false;
        $scope.$apply();
      }).catch(function (error) {
        $scope.error = error;

      });
    };


    $scope.showAddForm = function () {
      $scope.showAdd = true;
    };
    $scope.showEditForm = function () {
      $scope.showEdit = true
    };


    $scope.Sort = "authors+name";
    $scope.SortDesc = false;
    $scope.TomAndNumber = false;

    $scope.isTomAndNumber = function (book) {
      if ((book.tom && book.number) && book.type != 5) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isTomOrNumber = function (book) {
      if ((book.tom || book.number) && book.type != 5) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isTomNoNumber = function (book) {
      if ((book.tom && !book.number) || (!book.tom && book.number) && book.type != 5) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isNumberNoPage = function (book) {
      if (book.number && !book.page) {
        return true;
      } else {
        return false;
      }
    };


    $scope.isAuthors = function (book) {
      if (book.authors) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isName = function (book) {
      if (book.name) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isEditors = function (book) {
      if (book.editors && book.type != 5) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isBookname = function (book) {
      if (book.bookname) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isVypusk = function (book) {
      if (book.vypusk) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isTom = function (book) {
      if (book.tom && book.type != 5) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isNumber = function (book) {
      if (book.number && book.type != 5) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isType = function (book) {
      if (book.type) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isPage = function (book) {
      if (book.page) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isYear = function (book) {
      if (book.year) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isYearLetter = function (book) {
      if (book.yearletter) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isTown = function (book) {
      if (book.town && book.type != 5 && book.type != 3) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isPublic = function (book) {
      if (book.public && book.type != 3 && book.type != 5) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isPrim = function (book) {
      if (book.prim) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isLink = function (book) {
      if (book.link) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isISBN = function (book) {
      if (book.isbn) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isOnlyYear = function (book) {
      if (!(book.tom) && !(book.number) && !(book.town) && !(book.public)) {
        return false;
      } else {
        return true;
      }
    };

    $scope.isOnlyYearTown = function (book) {
      if (!(book.tom) && !(book.number)) {
        return false;
      } else {
        return true;
      }
    };

    $scope.isNoPublic = function (book) {
      if ((!book.public && !book.town) || (!book.public && book.town && book.type == 2) && book.type != 3 && book.type != 5) {
        return true;
      } else {
        return false;
      }
    };


    $scope.isField = function (book, field) {
      if (book.field) {
        return true;
      } else {
        return false;
      }
    };

    $scope.SortFcn = function (field) {
      if ($scope.Sort == "") {
        $scope.Sort = field;
      } else if ($scope.SortDesc == false) {
        $scope.SortDesc = true;
      } else {
        $scope.SortDesc = false;
        $scope.Sort = "";
      }
    };


    $scope.addNewBook = function () {
      if ($scope.newAuthors) {
        newAuthors = $scope.newAuthors
      } else newAuthors = null;
      if ($scope.newName) {
        newName = $scope.newName
      } else newName = null;
      if ($scope.newEditors) {
        newEditors = $scope.newEditors
      } else newEditors = null;
      if ($scope.newBookname) {
        newBookname = $scope.newBookname
      } else newBookname = null;
      if ($scope.newVypusk) {
        newVypusk = $scope.newVypusk
      } else newVypusk = null;
      if ($scope.newTom) {
        newTom = $scope.newTom
      } else newTom = null;
      if ($scope.newNumber) {
        newNumber = $scope.newNumber
      } else newNumber = null;
      if ($scope.newType) {
        newType = $scope.newType
      } else newType = null;
      if ($scope.newPage) {
        newPage = $scope.newPage
      } else newPage = null;
      if ($scope.newYear) {
        newYear = $scope.newYear
      } else newYear = null;
      if ($scope.newYearLetter) {
        newYearLetter = $scope.newYearLetter
      } else newYearLetter = null;
      if ($scope.newTown) {
        newTown = $scope.newTown
      } else newTown = null;
      if ($scope.newPublic) {
        newPublic = $scope.newPublic
      } else newPublic = null;
      if ($scope.newPrim) {
        newPrim = $scope.newPrim
      } else newPrim = null;
      if ($scope.newLink) {
        newLink = $scope.newLink
      } else newLink = null;
      if ($scope.newISBN) {
        newLink = $scope.newISBN
      } else newISBN = null;


      $scope.books.$add({
        authors: newAuthors,
        name: newName,
        editors: newEditors,
        bookname: newBookname,
        vypusk: newVypusk,
        tom: newTom,
        number: newNumber,
        type: newType,
        page: newPage,
        year: newYear,
        yearletter: newYearLetter,
        town: newTown,
        public: newPublic,
        prim: newPrim,
        link: newLink,
        isbn: newISBN

      });
      $scope.newAuthors = '';
      $scope.newName = '';
      $scope.newEditors = '';
      $scope.newBookname = '';
      $scope.newVypusk = '';
      $scope.newTom = '';
      $scope.newNumber = '';
      $scope.newPage = '';
      $scope.newYear = '';
      $scope.newYearLetter = '';
      $scope.newTown = '';
      $scope.newType = '1';
      $scope.newPublic = '';
      $scope.newPrim = '';
      $scope.newLink = '';
      $scope.newISBN = '';
      $scope.showAdd = false;
    };



    $scope.editBook = function (id) {

      $scope.bookToUpdate = $scope.books.$getRecord(id);
      $scope.showEdit = true;
      $('#editModal').modal();
    };
    $scope.updateBook = function () {
      $scope.books.$save($scope.bookToUpdate).then(function () {
        $('#editModal').modal('hide');
      }).catch(function (error) {
        console.log(error);
      });

    };
  });
