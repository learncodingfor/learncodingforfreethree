import flask
@app.route("/your/webservice")
def my_webservice():
    return jsonify(result=some_function(**request.args)) 
import cgi
import cgitb; cgitb.enable()
import sqlite3

mydb = 'messenger.db'
conn = sqlite3.connect(mydb)
cursor = conn.cursor()

print('alex')

"""
form = cgi.FieldStorage()
Sender = form.getvalue('UserName')
Reciever = form.getvalue('Class')
message = form.getvalue('Message')
val = {"Sender":Sender, "Reciever":Reciever, "message":message}
cursor.execute('''INSERT INTO Message (Message, SenderID, ClassID) VALUES (:message, :Sender, :Reciever)''',val)
conn.commit()
cursor.close()
"""
