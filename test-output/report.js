$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Feature/WorkFlow.feature");
formatter.feature({
  "line": 2,
  "name": "Workflow of demoblaze website",
  "description": "",
  "id": "workflow-of-demoblaze-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Signup for the demoblaze website and try to place an order",
  "description": "",
  "id": "workflow-of-demoblaze-website;signup-for-the-demoblaze-website-and-try-to-place-an-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Signup for the demoblaze website with your credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Signin with the same credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on a product of your choice for e.g \"Sony vaio i5\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Product page should get open with the product image",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on the add to cart button",
  "keyword": "Then "
});
formatter.match({
  "location": "demoblazeStepDefinitions.signup_for_the_demoblaze_website_with_your_credentials()"
});
formatter.result({
  "duration": 8241112300,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-GA142P7\u0027, ip: \u0027192.168.133.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {acceptInsecureCerts: true, browserName: firefox, moz:debuggerAddress: true, moz:firefoxOptions: {}}], desiredCapabilities\u003dCapabilities {acceptInsecureCerts: true, browserName: firefox, moz:debuggerAddress: true, moz:firefoxOptions: {}}}]\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:245)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:161)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:137)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:106)\r\n\tat stepDefinitions.demoblazeStepDefinitions.signup_for_the_demoblaze_website_with_your_credentials(demoblazeStepDefinitions.java:31)\r\n\tat ✽.Given Signup for the demoblaze website with your credentials(./Feature/WorkFlow.feature:6)\r\nCaused by: java.lang.NoSuchMethodError: \u0027com.google.common.collect.ImmutableMap com.google.common.collect.ImmutableMap.of(java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object, java.lang.Object)\u0027\r\n\tat org.openqa.selenium.chrome.AddHasCasting.getAdditionalCommands(AddHasCasting.java:38)\r\n\tat org.openqa.selenium.remote.Dialect.lambda$bindAdditionalCommands$1(Dialect.java:80)\r\n\tat java.base/java.lang.Iterable.forEach(Iterable.java:75)\r\n\tat org.openqa.selenium.remote.Dialect.bindAdditionalCommands(Dialect.java:79)\r\n\tat org.openqa.selenium.remote.Dialect.access$100(Dialect.java:29)\r\n\tat org.openqa.selenium.remote.Dialect$2.getCommandCodec(Dialect.java:54)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:245)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:161)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:137)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:106)\r\n\tat stepDefinitions.demoblazeStepDefinitions.signup_for_the_demoblaze_website_with_your_credentials(demoblazeStepDefinitions.java:31)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "demoblazeStepDefinitions.signin_with_the_same_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sony vaio i5",
      "offset": 43
    }
  ],
  "location": "demoblazeStepDefinitions.click_on_a_product_of_your_choice_for_e_g(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "demoblazeStepDefinitions.product_page_should_get_open_with_the_product_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "demoblazeStepDefinitions.click_on_the_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
});