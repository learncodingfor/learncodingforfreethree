import flask
@app.route("/your/webservice")
def my_webservice():
    return jsonify(result=some_function(**request.args)) 
