//SHOW ARTIST:
		// Dynamic creation of API xml request, first AJAX object:
			var xmlhttp = new XMLHttpRequest();
		// get URL from https://www.last.fm/api/show/artist.getInfo for the artist information:
			xmlhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Roxette&api_key=df472f5d973ec025ba8423bee9b7fa02", true);
			xmlhttp.send();	
			var xmlDoc;
			var artistName;
			var i;
		//Check if api received and OK
			xmlhttp.onreadystatechange=function() {
				if (xmlhttp.readyState==4 && xmlhttp.status==200){					
		//Define what you want from the api:	
					xmlDoc = xmlhttp.responseXML; 
					artistName = xmlDoc.getElementsByTagName("artist");
		//Make simple table/list:	
					table="<tr><th>Artist</th></tr>";
		//Loop through all artists and define how to show in table and add onclick event for more info:
					for (i = 0; i <artistName.length; i++) { 
						table += "<tr><td>";
						table += artistName[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
						table += "</td></tr>";	
					}	
		// Add information where to show the table with artist names:	
					document.getElementById("artist-table").innerHTML = table; 	
							
		//SHOW MORE INFO ON ARTIST WHEN CLICKED ON - first add event listener:	
					var rowlist = document.getElementById("artist-table");
					var row = rowlist.getElementsByTagName("td");
					for(var i =0; i<row.length; i++){
						row[i].addEventListener('click', function(){
						showInformation(i);
						});	
					}
				}
			}	


//Show information when clicking on the artist name	
			function showInformation(i) {		
				document.getElementById("artist-table").value;	
//If artist matches the album artist then take information from the album API
				for (i = 0; i <artistName.length; i++) { 
					document.getElementById("moreInformation").innerHTML = "<br><b>Artist:</b> " +
					artistName[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "&nbsp;&nbsp;<img src=" +
					artistName[i].getElementsByTagName("image")[0].childNodes[0].nodeValue + "/><br><br><b>Listeners:</b> "  +
					artistName[i].getElementsByTagName("listeners")[0].childNodes[0].nodeValue + "<br><br><b>Summary</b> " +
					artistName[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue + "<br>";
					document.getElementById("moreInformation").addEventListener("change", evenMore());
				}	
				
		//Added Eventlistener to change of data in more information field:
				
			}	
		//A search for more information									
			function evenMore(){
				var xmlhttp2 = new XMLHttpRequest();
				var info = document.getElementById("moreInformation").innerHTML;
				var infovalue = info.value;
		//Need more API's for album information
				var url= "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+infovalue+"&api_key=df472f5d973ec025ba8423bee9b7fa02";
				xmlhttp2.open("GET", url, true);
				xmlhttp2.send();	
		//Check that the api is responding and OK		
				xmlhttp2.onreadystatechange=function() {
					if (xmlhttp2.readyState==4 && xmlhttp2.status==200){	
		//Define what you want:		
						var xmlDoc2 = xmlhttp2.responseXML; 
						var albumName = xmlDoc2.getElementsByTagName("album");
		//Loop through to get right information:				
						for (var i = 0; i <albumName.length; i++) { 
							document.getElementById('evenMore').innerHTML = "<b>Top album:</b> " +
							albumName[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "<br>";
						}	
					}
				}	
			}	
			
//SEARCH FUNCTION:
		//Add Eventlistener:
			var button = document.getElementById("searchbutton");
			button.addEventListener("click", searchArtist);
		//Make site search:
			function searchArtist(){
		// Dynamic creation of API xml request, second AJAX object:		
				var xmlhttp3 = new XMLHttpRequest();
				var search = document.getElementById("artist-search");
				var artist = search.value;
				var url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+artist+"&api_key=df472f5d973ec025ba8423bee9b7fa02";	
		// get URL from https://www.last.fm/api/show/artist.getInfo for the artist information:
				xmlhttp3.open("GET", url, true);
				xmlhttp3.send();	
		//Check that the api is responding and OK		
				xmlhttp3.onreadystatechange=function() {
					if (xmlhttp3.readyState==4 && xmlhttp3.status==200){				
		//Define what you want:	
						var xmlDoc3 = xmlhttp3.responseXML; 
						var artistName = xmlDoc3.getElementsByTagName("artist");
		// Add information where to show the table with artist names:	
						for (i = 0; i <artistName.length; i++) { 
							document.getElementById("artistinfo").innerHTML = "<b>Artist:</b> " +	
							artistName[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "&nbsp;&nbsp;<img src=" +
							artistName[i].getElementsByTagName("image")[0].childNodes[0].nodeValue + "/><br><br><b>Genre:</b> " +
							artistName[i].getElementsByTagName("name")[6].childNodes[0].nodeValue + "<br><br><b>Summary:</b> " +
							artistName[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
						}	
					}	
				}
			}		
		//Just for fun embedding spotify with iframe style in



