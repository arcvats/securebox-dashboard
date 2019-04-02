export default io => ({
  stackTrace(req, res) {
    const stackTrace = req.body.trace;
    const time = req.body.time;
    if (stackTrace) {
      io.emit("stacktrace", { trace: stackTrace, time });
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  },
  timer(req, res) {
    /**
     * {
      total_time: (this.end - this.start).toFixed(3),
      metadata: {
        filename: callsites()[2].getFileName(),
        methodName: callsites()[2].getMethodName(),
        functionName: callsites()[2].getFunctionName(),
        lineNumber: callsites()[2].getLineNumber(),
        columnNumber: callsites()[2].getColumnNumber()
      },
      time: new Date(),
      trace: _.rest(this.stack.clean(new Error().stack).split("\n"), 2)
    };
     */
    const totalTime = req.body.total_time;
    const metadata = req.body.metadata;
    const time = req.body.time;
    const trace = req.body.trace;
    if (totalTime) {
      io.emit("timer", {
        totalTime,
        metadata,
        time,
        trace,
      });
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  },
  audit(req, res) {
    if (req.body.audit) {
      io.emit("audit", { audit: req.body.audit });
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  },
});
